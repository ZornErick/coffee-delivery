import {RadioInput} from "../../components/Form/RadioInput";
import {TextInput} from "../../components/Form/TextInput";
import {CoffeeItem} from "./components/CoffeeItem";

import {
    AddressForm, AddressFormBox,
    CheckoutContainer, CheckoutHeader, FormComponent,
    FormContainer,
    FormHeader, Line,
    PaymentForm, PriceLine, SelectedCoffeeFooter, SelectedCoffeesContainer, TotalPriceLine
} from "./styles.ts";
import {Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "@phosphor-icons/react";


export function Checkout() {
    return (
        <CheckoutContainer>
            <div>
                <CheckoutHeader>Complete seu pedido</CheckoutHeader>
                <FormComponent>
                    <FormContainer>
                        <FormHeader color={"yellow-dark"}>
                            <MapPinLine size={22} />
                            <div>
                                <h3>Endereço de Entrega</h3>
                                <span>Informe o endereço onde deseja receber o seu pedido</span>
                            </div>
                        </FormHeader>
                        <AddressForm>
                            <AddressFormBox $gridArea={"cep"}>
                                <TextInput placeholder={"CEP"} />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"street"}>
                                <TextInput placeholder={"Rua"} />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"number"}>
                                <TextInput placeholder={"Número"} />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"fullAddress"}>
                                <TextInput placeholder={"Complemento"} />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"neighborhood"}>
                                <TextInput placeholder={"Bairro"} />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"city"}>
                                <TextInput placeholder={"Cidade"} />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"state"}>
                                <TextInput placeholder={"UF"} />
                            </AddressFormBox>
                        </AddressForm>
                    </FormContainer>
                    <FormContainer>
                    <FormHeader color={"purple"}>
                            <CurrencyDollar size={22} />
                            <div>
                                <h3>Pagamento</h3>
                                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                            </div>
                        </FormHeader>
                        <PaymentForm>
                            <div>
                                <RadioInput
                                    isSelected={false}
                                    value={"credit"}
                                >
                                    <CreditCard size={16} />
                                    <span>Cartão de Crédito</span>
                                </RadioInput>
                                <RadioInput
                                    isSelected={false}
                                    value={"debit"}
                                >
                                    <Bank size={16} />
                                    <span>Cartão de Débito</span>
                                </RadioInput>
                                <RadioInput
                                    isSelected={false}
                                    value={"cash"}
                                >
                                    <Money size={16} />
                                    <span>Dinheiro</span>
                                </RadioInput>
                            </div>
                        </PaymentForm>
                    </FormContainer>
                </FormComponent>
            </div>
            <div>
                <CheckoutHeader>Cafés selecionados</CheckoutHeader>
                <SelectedCoffeesContainer>
                    <CoffeeItem coffeeTitle={"Expresso Tradicional"} coffeePrice={9.90} coffeeImage={"/images/coffees/expresso.png"} />
                    <Line/>
                    <CoffeeItem coffeeTitle={"Expresso Tradicional"} coffeePrice={9.90} coffeeImage={"/images/coffees/expresso.png"} />
                    <Line/>
                    <SelectedCoffeeFooter>
                        <div>
                            <PriceLine>
                                <span>Total de itens</span>
                                <span>R$ 29,70</span>
                            </PriceLine>
                            <PriceLine>
                                <span>Entrega</span>
                                <span>R$ 3,50</span>
                            </PriceLine>
                            <TotalPriceLine>
                                <span>Total</span>
                                <span>R$ 33,20</span>
                            </TotalPriceLine>
                        </div>
                        <button>
                            Confirmar Pedido
                        </button>
                    </SelectedCoffeeFooter>
                </SelectedCoffeesContainer>
            </div>
        </CheckoutContainer>
    );
}
