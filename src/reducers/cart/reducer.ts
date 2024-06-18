import {produce} from "immer";

import {IItem} from "../../interfaces/Cart.ts";
import {IOrder} from "../../interfaces/Order.ts";
import {Actions, ActionTypes} from "./actions.ts";


interface CartState {
    cart: IItem[];
    orders: IOrder[];
}

export function cartReducer(state: CartState, action: Actions) {
    switch (action.type) {
        case ActionTypes.ADD_COFFEE_ITEM_TO_CART:
            return produce(state, (draft) => {
                const itemAlreadyAdded = draft.cart.find(
                    (item) => item.id === action.payload.item.id
                )

                if (itemAlreadyAdded) {
                    itemAlreadyAdded.quantity += action.payload.item.quantity
                } else {
                    draft.cart.push(action.payload.item)
                }
            })
        case ActionTypes.REMOVE_COFFEE_ITEM_FROM_CART:
            return produce(state, (draft) => {
                const itemToRemoveId =  draft.cart.findIndex(
                    (item) => item.id === action.payload.itemId
                )
                draft.cart.splice(itemToRemoveId, 1);
            })
        case ActionTypes.INCREMENT_COFFEE_ITEM_QUANTITY:
            return produce(state, (draft) => {
                const itemToIncrementCoffeeItemQuantity = draft.cart.find(
                    (item) => item.id === action.payload.itemId
                )

                if (itemToIncrementCoffeeItemQuantity) {
                    itemToIncrementCoffeeItemQuantity.quantity += 1;
                }
            })
        case ActionTypes.DECREMENT_COFFEE_ITEM_QUANTITY:
            return produce(state, (draft) => {
                const itemToDecrementCoffeeItemQuantity = draft.cart.find(
                    (item) => item.id === action.payload.itemId
                )

                if (itemToDecrementCoffeeItemQuantity && itemToDecrementCoffeeItemQuantity.quantity > 1) {
                    itemToDecrementCoffeeItemQuantity.quantity -= 1;
                }
            })
        case ActionTypes.CHECKOUT:
            return produce(state, (draft) => {
                const newOrder: IOrder = {
                    id: action.payload.orderId,
                    items: state.cart,
                    ...action.payload.order
                }
                draft.orders.push(newOrder);
                draft.cart = []
            })
        default:
            return state;
    }
}
