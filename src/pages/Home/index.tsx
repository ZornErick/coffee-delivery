import {
    Banner, BannerIntro, BannerText, BannerTopics,
    CoffeeContainer,
    CoffeeList,
} from "./styles.ts";
import {Coffee, Package, ShoppingCart, Timer} from "@phosphor-icons/react";
import hero from "/images/hero.svg";

import {CoffeeTypes, ICoffee} from "../../interfaces/Coffee.ts";

import {CoffeeItem} from "./components/CoffeeItem";
import {RoundedIconText} from "./components/RoundedIconText";


export function Home() {
    const coffeeList: ICoffee[] = [
        {
            id: 1,
            title: "Expresso Tradicional",
            type: [CoffeeTypes.TRADICIONAL],
            description: "O tradicional café feito com água quente e grãos moídos",
            price: 9.90,
            image: "/images/coffees/expresso.png"
        },
        {
            id: 2,
            title: "Expresso Americano",
            type: [CoffeeTypes.TRADICIONAL],
            description: "Expresso diluído, menos intenso que o tradicional",
            price: 9.90,
            image: "/images/coffees/americano.png"
        },
        {
            id: 3,
            title: "Expresso Cremoso",
            type: [CoffeeTypes.TRADICIONAL],
            description: "Café expresso tradicional com espuma cremosa",
            price: 9.90,
            image: "/images/coffees/expresso-cremoso.png"
        },
        {
            id: 4,
            title: "Expresso Gelado",
            type: [CoffeeTypes.TRADICIONAL, CoffeeTypes.GELADO],
            description: "Bebida preparada com café expresso e cubos de gelo",
            price: 9.90,
            image: "/images/coffees/cafe-gelado.png"
        },
        {
            id: 5,
            title: "Café com Leite",
            type: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            price: 9.90,
            image: "/images/coffees/cafe-com-leite.png"
        },
        {
            id: 6,
            title: "Latte",
            type: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            price: 9.90,
            image: "/images/coffees/latte.png"
        },
        {
            id: 7,
            title: "Capuccino",
            type: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            price: 9.90,
            image: "/images/coffees/capuccino.png"
        },
        {
            id: 8,
            title: "Macchiato",
            type: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
            description: "Café expresso misturado com um pouco de leite quente e espuma",
            price: 9.90,
            image: "/images/coffees/macchiato.png"
        },
        {
            id: 9,
            title: "Mocaccino",
            type: [CoffeeTypes.TRADICIONAL, CoffeeTypes.COM_LEITE],
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            price: 9.90,
            image: "/images/coffees/mocaccino.png"
        },
        {
            id: 10,
            title: "Chocolate Quente",
            type: [CoffeeTypes.ESPECIAL, CoffeeTypes.COM_LEITE],
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            price: 9.90,
            image: "/images/coffees/chocolate-quente.png"
        },
        {
            id: 11,
            title: "Cubano",
            type: [CoffeeTypes.ESPECIAL, CoffeeTypes.ALCOOLICO, CoffeeTypes.GELADO],
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            price: 9.90,
            image: "/images/coffees/cubano.png"
        },
        {
            id: 12,
            title: "Havaiano",
            type: [CoffeeTypes.ESPECIAL],
            description: "Bebida adocicada preparada com café e leite de coco",
            price: 9.90,
            image: "/images/coffees/havaiano.png"
        },
        {
            id: 13,
            title: "Árabe",
            type: [CoffeeTypes.ESPECIAL],
            description: "Bebida preparada com grãos de café árabe e especiarias",
            price: 9.90,
            image: "/images/coffees/arabe.png"
        },
        {
            id: 14,
            title: "Irlandês",
            type: [CoffeeTypes.ESPECIAL, CoffeeTypes.ALCOOLICO],
            description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
            price: 9.90,
            image: "/images/coffees/irlandes.png"
        }
    ]

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
                    {coffeeList.map(coffee => (
                        <CoffeeItem key={coffee.id} coffee={coffee}/>
                    ))}
                </CoffeeList>
            </CoffeeContainer>
        </main>
    );
}
