import {Link} from "react-router-dom";

import {AsideContainer, HeaderContainer, LocationTag} from "./styles.ts";
import logoCoffeeDelivery from "/logo.svg";
import {MapPin, ShoppingCart} from "@phosphor-icons/react";


export function Header() {
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
                    <div>
                        <span>0</span>
                    </div>
                    <ShoppingCart size={22} weight={"fill"}/>
                </Link>
            </AsideContainer>
        </HeaderContainer>
    );
}
