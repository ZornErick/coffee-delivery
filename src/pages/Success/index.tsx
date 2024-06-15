import {SuccessCard, SuccessContainer, SuccessContent, SuccessHeader} from "./styles.ts";
import {InfoTag} from "./components/InfoTag";
import {CurrencyDollar, MapPin, Timer} from "@phosphor-icons/react";

export function Success() {
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
                            firstText={"Entrega em Rua João Daniel Martinelli, 102"}
                            secondText={"Farrapos - Porto Alegre, RS"}
                        />
                        <InfoTag
                            Icon={Timer}
                            iconBackgroundColor={"yellow"}
                            firstText={"Previsão de entrega"}
                            secondText={"20 min - 30 min"}
                        />
                        <InfoTag
                            Icon={CurrencyDollar}
                            iconBackgroundColor={"yellow-dark"}
                            firstText={"Pagamento na entrega"}
                            secondText={"Cartão de Crédito"}
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
