import {NewOrderFormData} from "../pages/Checkout";
import {IItem} from "./Cart.ts";

export interface IOrder extends NewOrderFormData{
    id: string;
    items: IItem[];
}
