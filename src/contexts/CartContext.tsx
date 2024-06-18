import {createContext, ReactNode, useEffect, useReducer} from "react";
import {useNavigate} from "react-router-dom";

import {cartReducer} from "../reducers/cart/reducer.ts";

import {IItem} from "../interfaces/Cart.ts";
import {IOrder} from "../interfaces/Order.ts";
import {
    addCoffeeItemToCartAction, checkoutAction, decrementCoffeeItemQuantityAction,
    incrementCoffeeItemQuantityAction,
    removeCoffeeItemFromCartAction
} from "../reducers/cart/actions.ts";


export interface IOrderFormData {
    cep: string,
    street: string,
    number: string,
    fullAddress: string,
    neighborhood: string,
    city: string,
    state: string,
    paymentMethod: "credit" | "debit" | "cash",
}

interface ICartContext {
    cart: IItem[];
    orders: IOrder[];
    addCoffeeItemToCart: (item: IItem) => void;
    removeCoffeeItemFromCart: (itemId: IItem["id"]) => void;
    incrementCoffeeItemQuantity: (itemId: IItem["id"]) => void;
    decrementCoffeeItemQuantity: (itemId: IItem["id"]) => void;
    checkout: (order: IOrderFormData) => void;
}

export const CartContext = createContext({} as ICartContext);

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartState, dispatch] = useReducer(cartReducer, {
        cart: [],
        orders: []
    }, (initialState) => {
        const storageStateAsJSON = localStorage.getItem("@coffee-delivery:cart-state-1.0.0");
        if (storageStateAsJSON) {
            return JSON.parse(storageStateAsJSON);
        }

        return initialState;
    })
    const navigate = useNavigate();

    const { cart, orders } = cartState;

    useEffect(() => {
        if (cartState) {
            const stateJSON = JSON.stringify(cartState);

            localStorage.setItem("@coffee-delivery:cart-state-1.0.0", stateJSON);
        }
    }, [cartState])

    function addCoffeeItemToCart(item: IItem) {
        dispatch(addCoffeeItemToCartAction(item));
    }

    function removeCoffeeItemFromCart(itemId: IItem["id"]) {
        dispatch(removeCoffeeItemFromCartAction(itemId));
    }

    function incrementCoffeeItemQuantity(itemId: IItem["id"]) {
        dispatch(incrementCoffeeItemQuantityAction(itemId));
    }

    function decrementCoffeeItemQuantity(itemId: IItem["id"]) {
        dispatch(decrementCoffeeItemQuantityAction(itemId));
    }

    function checkout(order: IOrderFormData) {
        const orderId = new Date().getTime().toString()
        dispatch(checkoutAction(orderId, order));
        navigate(`/order/${orderId}/success`)
    }

    return (
        <CartContext.Provider value={{ cart, orders, addCoffeeItemToCart, removeCoffeeItemFromCart, incrementCoffeeItemQuantity, decrementCoffeeItemQuantity, checkout }}>
            {children}
        </CartContext.Provider>
    );
}
