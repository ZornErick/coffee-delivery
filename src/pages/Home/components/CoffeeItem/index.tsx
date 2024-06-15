import {useState} from "react";
import {ItemQuantityController} from "../../../../components/ItemQuantityController";

import {CoffeeItemCard, CoffeeItemFooter, CoffeeItemFunc, CoffeeItemText, CoffeeItemType, PriceTag} from "./styles.ts";
import {ICoffee} from "../../../../interfaces/Coffee.ts";
import {ShoppingCart} from "@phosphor-icons/react";


interface CoffeeItemProps {
    coffee: ICoffee;
}

export function CoffeeItem({ coffee }: CoffeeItemProps) {
    const [coffeeItemQuantity, setCoffeeItemQuantity] = useState(1);

    const coffeePrice = coffee.price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}).substring(2).trim()

    function handleIncrementItemQuantity() {
        setCoffeeItemQuantity((state) => state + 1)
    }

    function handleDecrementItemQuantity() {
        if (coffeeItemQuantity > 1) {
            setCoffeeItemQuantity((state) => state - 1)
        }
    }

    return (
        <CoffeeItemCard>
            <img src={coffee.image} alt={"Imagem de uma xícara de café"} />
            <CoffeeItemType>
                {coffee.type.map((type, index) => (
                    <span key={index}>
                        {type}
                    </span>
                ))}
            </CoffeeItemType>
            <CoffeeItemText>
                <h3>{coffee.title}</h3>
                <p>{coffee.description}</p>
            </CoffeeItemText>
            <CoffeeItemFooter>
                <PriceTag>
                    R$<span> {coffeePrice}</span>
                </PriceTag>
                <CoffeeItemFunc>
                    <ItemQuantityController
                        coffeeItemQuantity={coffeeItemQuantity}
                        handleIncrementItemQuantity={handleIncrementItemQuantity}
                        handleDecrementItemQuantity={handleDecrementItemQuantity}
                    />
                    <button type={"button"}>
                        <ShoppingCart size={22} weight={"fill"} />
                    </button>
                </CoffeeItemFunc>
            </CoffeeItemFooter>
        </CoffeeItemCard>
    );
}
