import styled from "styled-components";
import {mixins} from "../../../../styles/mixins.ts";

export const CoffeeItemCard = styled.div`
    display: flex;
    justify-content: space-between;
    
    background-color: ${props => props.theme["base-card"]};
    
    > div {
        display: flex;
        align-items: center;
        gap: 20px;
        
        > img {
            width: 64px;
            height: 64px;
        }
    }
    
    > span {
        ${mixins.fonts.titleXS}
    }
`

export const CoffeeItemFunc = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    
    > div {
        display: flex;
        gap: 8px;
        
        > button {
            display: flex;
            align-items: center;
            gap: 4px;
            
            padding: 8px;
            
            color: ${props => props.theme["purple"]};
            background-color: ${props => props.theme["base-button"]};
            
            border-radius: 6px;
            
            &:hover {
                background-color: ${props => props.theme["base-hover"]};
            }
            
            > span {
                ${mixins.fonts.buttonM}
                color: ${props => props.theme["base-text"]};
            }
        }
    }
`
