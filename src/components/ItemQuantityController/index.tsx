import {QuantityControllerContainer} from "./styles.ts";
import {Minus, Plus} from "@phosphor-icons/react";

interface ItemQuantityControllerProps {
    coffeeItemQuantity: number;
    handleIncrementItemQuantity: () => void;
    handleDecrementItemQuantity: () => void;
}

export function ItemQuantityController({ coffeeItemQuantity, handleIncrementItemQuantity, handleDecrementItemQuantity }: ItemQuantityControllerProps) {
    return (
        <QuantityControllerContainer>
            <button type={"button"} onClick={handleDecrementItemQuantity}>
                <Minus size={14} weight={"bold"}/>
            </button>
            <span>{coffeeItemQuantity}</span>
            <button type={"button"} onClick={handleIncrementItemQuantity}>
                <Plus size={14} weight={"bold"}/>
            </button>
        </QuantityControllerContainer>
    );
}
