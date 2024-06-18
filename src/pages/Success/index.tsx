import {SuccessCard, SuccessContainer, SuccessContent, SuccessHeader} from "./styles.ts";
import {InfoTag} from "./components/InfoTag";
import {CurrencyDollar, MapPin, Timer} from "@phosphor-icons/react";
import {useContext} from "react";
import {CartContext} from "../../contexts/CartContext.tsx";
import {useParams} from "react-router-dom";

export function Success() {
    const { orders } = useContext(CartContext);
    const { orderId } = useParams();

    const order = orders.find((order) => order.id === orderId);

    const paymentMethods = {
        credit: "Cartão de Crédito",
        debit: "Cartão de Débito",
        cash: "Dinheiro"
    }

    if (!order) {
        return null;
    }

    return (
        <SuccessContainer>
            <SuccessHeader>
                <h2>Uhu! Pedido confirmado</h2>
                <span>Agora é só aguardar que logo o café chegará até você</span>
            </SuccessHeader>
            <SuccessContent>
                <SuccessCard>
                    <div>
                        <InfoTag
                            Icon={MapPin}
                            iconBackgroundColor={"purple"}
                            firstText={<span>Entrega em <strong>{order.street}, {order.number}</strong></span>}
                            secondText={<span>{order.neighborhood} - {order.city}, {order.state}</span>}
                        />
                        <InfoTag
                            Icon={Timer}
                            iconBackgroundColor={"yellow"}
                            firstText={<span>Previsão de entrega</span>}
                            secondText={<span><strong>20 min - 30 min</strong></span>}
                        />
                        <InfoTag
                            Icon={CurrencyDollar}
                            iconBackgroundColor={"yellow-dark"}
                            firstText={<span>Pagamento na entrega</span>}
                            secondText={<span><strong>{paymentMethods[order.paymentMethod]}</strong></span>}
                        />
                    </div>
                </SuccessCard>
                <div>
                    <img src={"/images/delivery.svg"} alt={"Homem andando de moto com caixa na garupa"} />
                </div>
            </SuccessContent>
        </SuccessContainer>
    );
}
