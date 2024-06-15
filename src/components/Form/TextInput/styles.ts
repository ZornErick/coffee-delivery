import styled from "styled-components";

export const TextContainer = styled.label`
    display: flex;
    align-items: center;

    background-color: ${props => props.theme["base-input"]};

    border-radius: 6px;
    border: 1px solid ${props => props.theme['base-button']};

    transition: all 0.2s;

    &[data-state='focused'] {
        border-color: ${props => props.theme["yellow-dark"]};
    }

    &[data-state='blurred'] {
        border-color: ${props => props.theme["base-button"]};
    }

    > input {
        padding: 12px;
        
        width: 100%;
        
        color: ${props => props.theme["base-text"]};
        background-color: transparent;
        
        border: none;
        
        outline: none;

        &::placeholder {
            color: ${props => props.theme["base-label"]};
        }
    }
`
