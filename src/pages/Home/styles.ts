import styled from "styled-components";
import {mixins} from "../../styles/mixins.ts";

export const Banner = styled.div`
    background-image: url("/images/hero-bg.svg");
    
    padding: 5rem 10rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BannerIntro = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
`

export const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    max-width: 588px;

    > h1 {
        ${mixins.fonts.titleXL};
        color: ${props => props.theme["base-title"]};
    }

    > p {
        ${mixins.fonts.textL};
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const BannerTopics = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`

export const CoffeeContainer = styled.div`
    margin: 2rem 10rem;
    
    > h2 {
        ${mixins.fonts.titleL};
        color: ${props => props.theme["base-subtitle"]};
    }
`

export const CoffeeList = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 32px;

    padding: 3rem 0;
`
