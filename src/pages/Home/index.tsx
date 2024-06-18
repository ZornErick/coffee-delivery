import {CoffeeItem} from "./components/CoffeeItem";
import {RoundedIconText} from "./components/RoundedIconText";

import {
    Banner, BannerIntro, BannerText, BannerTopics,
    CoffeeContainer,
    CoffeeList,
} from "./styles.ts";
import {Coffee, Package, ShoppingCart, Timer} from "@phosphor-icons/react";
import hero from "/images/hero.svg";

import { coffees } from "../../data/coffees.json";


export function Home() {
    return (
        <main>
            <Banner>
                <BannerIntro>
                    <BannerText>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </BannerText>
                    <BannerTopics>
                        <RoundedIconText
                            Icon={ShoppingCart}
                            text={"Compra simples e segura"}
                            iconBackgroundColor={"yellow-dark"}
                        />
                        <RoundedIconText
                            Icon={Package}
                            text={"Embalagem mantém o café intacto"}
                            iconBackgroundColor={"base-text"}
                        />
                        <RoundedIconText
                            Icon={Timer}
                            text={"Entrega rápida e rastreada"}
                            iconBackgroundColor={"yellow"}
                        />
                        <RoundedIconText
                            Icon={Coffee}
                            text={"O café chega fresquinho até você"}
                            iconBackgroundColor={"purple"}
                        />
                    </BannerTopics>
                </BannerIntro>
                <div>
                    <img src={hero} alt={"Café Coffee Delivery"}/>
                </div>
            </Banner>
            <CoffeeContainer>
                <h2>Nossos cafés</h2>
                <CoffeeList>
                    {coffees.map(coffee => (
                        <CoffeeItem key={coffee.id} coffee={coffee}/>
                    ))}
                </CoffeeList>
            </CoffeeContainer>
        </main>
    );
}
