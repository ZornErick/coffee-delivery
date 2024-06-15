import {ItemQuantityController} from "../../../../components/ItemQuantityController"

import {CoffeeItemCard, CoffeeItemFunc} from "./styles.ts";
import {Trash} from "@phosphor-icons/react";


interface CoffeeItemProps {
    coffeeTitle: string;
    coffeePrice: number;
    coffeeImage: string;
}

export function CoffeeItem({coffeeTitle, coffeePrice, coffeeImage}: CoffeeItemProps) {
    const coffeePriceString = coffeePrice.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}).substring(2).trim()

    return (
        <CoffeeItemCard>
            <div>
                <img src={coffeeImage} alt={"Imagem de uma xícara de café"}/>
                <CoffeeItemFunc>
                    <h3>{coffeeTitle}</h3>
                    <div>
                        <ItemQuantityController
                            coffeeItemQuantity={0}
                            handleIncrementItemQuantity={() => {
                            }}
                            handleDecrementItemQuantity={() => {
                            }}
                        />
                        <button>
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
