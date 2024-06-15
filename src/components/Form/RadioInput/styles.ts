import styled from "styled-components";
import {mixins} from "../../../styles/mixins.ts";

export const RadioContainer = styled.label`
    display: flex;
    align-items: center;
    gap: 12px;
    
    padding: 16px;
    
    width: 100%;
    
    border-radius: 6px;
    
    background-color: ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    
    text-transform: uppercase;
    transition: all 0.2s;
    
    ${mixins.fonts.buttonM}

    &:hover {
        background-color: ${props => props.theme["base-hover"]};
    }

    &[data-state="true"] {
        background-color: ${props => props.theme["purple-light"]};
        border-color: ${props => props.theme["purple"]};
    }

    > input {
        display: none;
    }
    
    > svg {
        color: ${props => props.theme["purple"]};
    }
`
