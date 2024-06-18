import {Link} from "react-router-dom";

import {AsideContainer, HeaderContainer, LocationTag} from "./styles.ts";
import logoCoffeeDelivery from "/logo.svg";
import {MapPin, ShoppingCart} from "@phosphor-icons/react";
import {useContext} from "react";
import {CartContext} from "../../contexts/CartContext.tsx";


export function Header() {
    const { cart } = useContext(CartContext);

    return (
        <HeaderContainer>
            <Link to={"/"}>
                <img src={logoCoffeeDelivery} alt={"Logo Coffee Delivery"}/>
            </Link>
            <AsideContainer>
                <LocationTag>
                    <MapPin size={22} weight={"fill"} />
                    <span>Porto Alegre, RS</span>
                </LocationTag>
                <Link to={"/checkout"}>
                    {cart.length > 0 ? (
                        <div>
                            <span>{cart.length}</span>
                        </div>
                    ) : null}
                    <ShoppingCart size={22} weight={"fill"}/>
                </Link>
            </AsideContainer>
        </HeaderContainer>
    );
}
