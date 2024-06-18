import {useContext} from "react";
import {CartContext} from "../../contexts/CartContext.tsx";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import {RadioInput} from "../../components/Form/RadioInput";
import {TextInput} from "../../components/Form/TextInput";
import {CoffeeItem} from "./components/CoffeeItem";

import * as zod from "zod";

import {
    AddressForm, AddressFormBox,
    CheckoutContainer, CheckoutHeader, FormComponent,
    FormContainer,
    FormHeader, Line,
    PaymentForm, PriceLine, SelectedCoffeeFooter, SelectedCoffeesContainer, TotalPriceLine
} from "./styles.ts";
import {Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "@phosphor-icons/react";

import { coffees } from "../../data/coffees.json";


const newOrderFormValidationSchema = zod.object({
    cep: zod.string().min(8, "Informe o CEP").max(8, "Informe o CEP"),
    street: zod.string().min(1, "Informe a rua"),
    number: zod.string().min(1, "Informe o número"),
    fullAddress: zod.string(),
    neighborhood: zod.string().min(1, "Informe o bairro"),
    city: zod.string().min(1, "Informe a cidade"),
    state: zod.string().min(2, "Informe o estado").max(2, "Informe o estado"),
    paymentMethod: zod.enum(["credit", "debit", "cash"], {
        invalid_type_error: "Informe um método de pagamento"
    })
})

export type NewOrderFormData = zod.infer<typeof newOrderFormValidationSchema>

export function Checkout() {
    const { cart, checkout } = useContext(CartContext);
    const newOrderForm = useForm<NewOrderFormData>({
        resolver: zodResolver(newOrderFormValidationSchema)
    })

    const { register, handleSubmit, watch, reset, formState: { errors }} = newOrderForm

    const itemsInCart = cart.map((item) => {
        const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);
        if (!coffeeInfo) {
            throw new Error("Coffee not found!");
        }

        return {
            coffee: coffeeInfo,
            quantity: item.quantity
        }
    })

    const shippingPrice = 3.5;
    const totalCartItemsPrice = itemsInCart.reduce((value, item) => {
        value += item.coffee.price * item.quantity
        return value
    }, 0);
    const totalPrice = totalCartItemsPrice + shippingPrice;

    function handleNewOrderCheckout(data: NewOrderFormData) {
        if (cart.length === 0) {
            return alert("É preciso ter pelo menos um item no carrinho");
        }

        checkout(data);
        reset();
    }

    const selectPaymentMethod = watch("paymentMethod");

    console.log(errors)

    return (
        <CheckoutContainer>
            <div>
                <CheckoutHeader>Complete seu pedido</CheckoutHeader>
                <FormComponent id={"order"} onSubmit={handleSubmit(handleNewOrderCheckout)} action={""}>
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
                                <TextInput
                                    placeholder={"CEP"}
                                    {...register("cep")}
                                />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"street"}>
                                <TextInput
                                    placeholder={"Rua"}
                                    {...register("street")}
                                />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"number"}>
                                <TextInput
                                    placeholder={"Número"}
                                    {...register("number")}
                                />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"fullAddress"}>
                                <TextInput
                                    placeholder={"Complemento"}
                                    {...register("fullAddress")}
                                />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"neighborhood"}>
                                <TextInput
                                    placeholder={"Bairro"}
                                    {...register("neighborhood")}
                                />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"city"}>
                                <TextInput
                                    placeholder={"Cidade"}
                                    {...register("city")}
                                />
                            </AddressFormBox>
                            <AddressFormBox $gridArea={"state"}>
                                <TextInput
                                    placeholder={"UF"}
                                    {...register("state")}
                                />
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
                                    isSelected={selectPaymentMethod === "credit"}
                                    value={"credit"}
                                    {...register("paymentMethod")}
                                >
                                    <CreditCard size={16} />
                                    <span>Cartão de Crédito</span>
                                </RadioInput>
                                <RadioInput
                                    isSelected={selectPaymentMethod === "debit"}
                                    value={"debit"}
                                    {...register("paymentMethod")}
                                >
                                    <Bank size={16} />
                                    <span>Cartão de Débito</span>
                                </RadioInput>
                                <RadioInput
                                    isSelected={selectPaymentMethod === "cash"}
                                    value={"cash"}
                                    {...register("paymentMethod")}
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
                    {itemsInCart.map((item) => {
                        return (
                            <div key={item.coffee.id}>
                                <CoffeeItem
                                    coffeeId={item.coffee.id}
                                    coffeeTitle={item.coffee.title}
                                    coffeePrice={item.coffee.price}
                                    coffeeImage={item.coffee.image}
                                    coffeeQuantity={item.quantity}
                                />
                                <Line/>
                            </div>
                        )
                    })}
                    <SelectedCoffeeFooter>
                        <div>
                            <PriceLine>
                                <span>Total de itens</span>
                                <span>{totalCartItemsPrice.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
                            </PriceLine>
                            <PriceLine>
                                <span>Entrega</span>
                                <span>{shippingPrice.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
                            </PriceLine>
                            <TotalPriceLine>
                                <span>Total</span>
                                <span>{totalPrice.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}</span>
                            </TotalPriceLine>
                        </div>
                        <button type={"submit"} form={"order"}>
                            Confirmar Pedido
                        </button>
                    </SelectedCoffeeFooter>
                </SelectedCoffeesContainer>
            </div>
        </CheckoutContainer>
    );
}
