import styled from "styled-components";
import {mixins} from "../../styles/mixins.ts";

export const QuantityControllerContainer = styled.div`
    display: flex;
    gap: 6px;

    padding: 8px;

    background-color: ${props => props.theme["base-button"]};

    border-radius: 6px;

    > span {
        ${mixins.fonts.textM}
        color: ${props => props.theme["base-title"]};
    }

    > button {
        display: flex;
        align-items: center;

        background-color: transparent;
        color: ${props => props.theme["purple"]};

        border: none;
    }
`
