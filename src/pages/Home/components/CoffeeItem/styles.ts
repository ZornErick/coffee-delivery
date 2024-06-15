import styled from "styled-components";
import {mixins} from "../../../../styles/mixins.ts";

export const CoffeeItemCard = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    max-width: 256px;
    height: 310px;

    padding: 20px;

    background-color: ${props => props.theme["base-card"]};

    border-radius: 6px 36px 36px 6px;

    > img {
        position: absolute;
        top: -15px;
    }
`

export const CoffeeItemType = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    margin-top: 85px;

    > span {
        ${mixins.fonts.tag}

        padding: 4px 8px;

        background-color: ${props => props.theme["yellow-light"]};
        color: ${props => props.theme["yellow-dark"]};

        border-radius: 100px;
    }
`

export const CoffeeItemText = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    > h3 {
        ${mixins.fonts.titleS}
        color: ${props => props.theme["base-subtitle"]};
    }

    > p {
        ${mixins.fonts.textS}
        color: ${props => props.theme["base-label"]};
    }
`

export const CoffeeItemFooter = styled.div`
    display: flex;
    justify-content: space-around;

    width: 100%;
`

export const PriceTag = styled.div`
    display: flex;
    align-items: center;
    gap: 3px;

    font-size: 1rem;

    line-height: 130%;

    color: ${props => props.theme["base-text"]};

    > span {
        ${mixins.fonts.titleM}
    }
`

export const CoffeeItemFunc = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;

    > button {
        display: flex;
        align-items: center;

        padding: 8px;

        background-color: ${props => props.theme["purple-dark"]};
        color: ${props => props.theme.white};

        border: none;
        border-radius: 6px;

        &:hover {
            background-color: ${props => props.theme["purple"]};
        }
    }
`
