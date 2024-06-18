import {IItem} from "../../interfaces/Cart.ts";
import {IOrderFormData} from "../../contexts/CartContext.tsx";


export enum ActionTypes {
    ADD_COFFEE_ITEM_TO_CART = "ADD_COFFEE_ITEM_TO_CART",
    REMOVE_COFFEE_ITEM_FROM_CART = "REMOVE_COFFEE_ITEM_FROM_CART",
    INCREMENT_COFFEE_ITEM_QUANTITY = "INCREMENT_COFFEE_ITEM_QUANTITY",
    DECREMENT_COFFEE_ITEM_QUANTITY = "DECREMENT_COFFEE_ITEM_QUANTITY",
    CHECKOUT = "CHECKOUT"
}

export type Actions = | {
    type: ActionTypes.ADD_COFFEE_ITEM_TO_CART
    payload: {
        item: IItem
    }
}
| {
    type:
        | ActionTypes.REMOVE_COFFEE_ITEM_FROM_CART
        | ActionTypes.INCREMENT_COFFEE_ITEM_QUANTITY
        | ActionTypes.DECREMENT_COFFEE_ITEM_QUANTITY
    payload: {
        itemId: IItem["id"]
    }
}
| {
    type: ActionTypes.CHECKOUT
    payload: {
        orderId: string
        order: IOrderFormData
    }
}

export function addCoffeeItemToCartAction(item: IItem) {
    return {
        type: ActionTypes.ADD_COFFEE_ITEM_TO_CART,
        payload: {
            item: item
        }
    } satisfies Actions
}

export function removeCoffeeItemFromCartAction(itemId: IItem["id"]) {
    return {
        type: ActionTypes.REMOVE_COFFEE_ITEM_FROM_CART,
        payload: {
            itemId: itemId
        }
    } satisfies Actions
}

export function incrementCoffeeItemQuantityAction(itemId: IItem["id"]) {
    return {
        type: ActionTypes.INCREMENT_COFFEE_ITEM_QUANTITY,
        payload: {
            itemId: itemId
        }
    } satisfies Actions
}

export function decrementCoffeeItemQuantityAction(itemId: IItem["id"]) {
    return {
        type: ActionTypes.DECREMENT_COFFEE_ITEM_QUANTITY,
        payload: {
            itemId: itemId
        }
    } satisfies Actions
}

export function checkoutAction(orderId: string, order: IOrderFormData) {
    return {
        type: ActionTypes.CHECKOUT,
        payload: {
            orderId,
            order
        }
    } satisfies Actions
}
