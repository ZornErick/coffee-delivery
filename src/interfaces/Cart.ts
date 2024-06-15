import {ICoffee} from "./Coffee.ts";

export interface CartItem {
    id: string;
    coffee: ICoffee;
    quantity: number;
}
