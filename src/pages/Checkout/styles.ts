import styled from "styled-components";
import {mixins} from "../../styles/mixins.ts";

export const CheckoutContainer = styled.main`
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 32px;
    
    margin: 2.5rem 10rem;
`

export const CheckoutHeader = styled.h2`
    ${mixins.fonts.titleXS};
`

export const FormComponent = styled.form`
    display: flex;
    flex-direction: column;
    gap: 12px;

    margin-top: 15px;
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    padding: 40px;
    
    background-color: ${props => props.theme["base-card"]};
    
    border-radius: 6px;
`

export const FormHeader = styled.div`
    display: flex;
    
    > svg {
        color: ${props => props.theme[`${props.color}`]};
    }
    
    > div {
        > h3 {
            ${mixins.fonts.textM};
            color: ${props => props.theme["base-subtitle"]};
        }

        > span {
            ${mixins.fonts.textS};
            color: ${props => props.theme["base-text"]};
        }
    }
`

export const AddressForm = styled.div`
    display: grid;
    grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
    grid-template-columns: 200px 1fr 60px;
    grid-gap: 16px 12px;
`

interface AddressFormBoxProps {
    $gridArea?: string;
}

export const AddressFormBox = styled.div<AddressFormBoxProps>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    grid-area: ${props => props.$gridArea || "auto"};
`

export const PaymentForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    }
`

export const SelectedCoffeesContainer = styled.div`
    padding: 40px;
    
    margin-top: 15px;
    
    background-color: ${props => props.theme["base-card"]};
    
    border-radius: 6px 44px;
`

export const Line = styled.div`
    width: 100%;
    height: 1px;
    
    margin: 24px 0;
    
    background-color: ${props => props.theme["base-button"]};
`

export const SelectedCoffeeFooter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    > button {
        ${mixins.fonts.buttonG}
        
        padding: 12px 117px;

        color: ${props => props.theme.white};
        background-color: ${props => props.theme["yellow"]};

        border: none;
        border-radius: 6px;
        
        transition: all 0.2s;
        
        &:hover {
            background-color: ${props => props.theme["yellow-dark"]};
        }
    }
`

export const PriceLine = styled.div`
    display: flex;
    justify-content: space-between;
    
    margin: 12px 0;
    
    > span {
        line-height: 130%;

        color: ${props => props.theme["base-text"]};
    }

    > span:nth-of-type(1) {
        font-size: 0.875rem;
    }

    > span:nth-of-type(2) {
        font-size: 1rem;
    }
`

export const TotalPriceLine = styled(PriceLine)`
    > span {
        font-weight: bold;

        line-height: 130%;

        color: ${props => props.theme["base-subtitle"]};
    }

    > span:nth-of-type(1) {
        font-size: 1.25rem;
    }

    > span:nth-of-type(2) {
        font-size: 1.25rem;
    }
`
