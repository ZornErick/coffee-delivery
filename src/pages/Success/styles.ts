import styled from "styled-components";
import {mixins} from "../../styles/mixins.ts";

export const SuccessContainer = styled.main`
    margin: 2rem 10rem;
`

export const SuccessHeader = styled.div`
    > h2 {
        ${mixins.fonts.titleL};
        color: ${props => props.theme["yellow-dark"]};
    }

    > span {
        ${mixins.fonts.textL};
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const SuccessContent = styled.div`
    display: flex;
    align-items: center;
    gap: 300px;
`

export const SuccessCard = styled.div`
    width: 100%;

    border: 1px solid transparent;
    border-radius: 6px 36px;

    background-origin: border-box;

    background-image: ${props => `linear-gradient(to bottom right, ${props.theme["yellow"]}, ${props.theme["purple"]})`};

    > div {
        display: flex;
        flex-direction: column;
        gap: 32px;

        padding: 40px;

        background-color: ${props => props.theme.background};

        border-radius: 6px 36px;
    }
`
