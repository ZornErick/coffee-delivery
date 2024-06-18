import {ItemQuantityController} from "../../../../components/ItemQuantityController"

import {CoffeeItemCard, CoffeeItemFunc} from "./styles.ts";
import {Trash} from "@phosphor-icons/react";
import {useContext} from "react";
import {CartContext} from "../../../../contexts/CartContext.tsx";
import {ICoffee} from "../../../../interfaces/Coffee.ts";


interface CoffeeItemProps {
    coffeeId: ICoffee["id"];
    coffeeTitle: ICoffee["title"];
    coffeePrice: ICoffee["price"];
    coffeeImage: ICoffee["image"];
    coffeeQuantity: number;
}

export function CoffeeItem({ coffeeId, coffeeTitle, coffeePrice, coffeeImage, coffeeQuantity}: CoffeeItemProps) {
    const { removeCoffeeItemFromCart, incrementCoffeeItemQuantity, decrementCoffeeItemQuantity } = useContext(CartContext);

    const coffeePriceString = coffeePrice.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}).substring(2).trim()

    function handleRemoveCoffeeItemFromCart() {
        removeCoffeeItemFromCart(coffeeId);
    }

    function handleIncrementCoffeeItemQuantity() {
        incrementCoffeeItemQuantity(coffeeId);
    }

    function handleDecrementCoffeeItemQuantity() {
        decrementCoffeeItemQuantity(coffeeId);
    }

    return (
        <CoffeeItemCard>
            <div>
                <img src={coffeeImage} alt={"Imagem de uma xícara de café"}/>
                <CoffeeItemFunc>
                    <h3>{coffeeTitle}</h3>
                    <div>
                        <ItemQuantityController
                            coffeeItemQuantity={coffeeQuantity}
                            handleIncrementItemQuantity={handleIncrementCoffeeItemQuantity}
                            handleDecrementItemQuantity={handleDecrementCoffeeItemQuantity}
                        />
                        <button type={"button"} onClick={handleRemoveCoffeeItemFromCart}>
                            <Trash size={16}/>
                            <span>REMOVER</span>
                        </button>
                    </div>
                </CoffeeItemFunc>
            </div>
            <span>R$ {coffeePriceString}</span>
        </CoffeeItemCard>
    );
}
