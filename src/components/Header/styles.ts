import styled from "styled-components";
import {mixins} from "../../styles/mixins.ts";

export const HeaderContainer = styled.header`
    margin: 2rem 10rem;
    
    display: flex;
    justify-content: space-between;
`

export const AsideContainer = styled.aside`
    display: flex;
    align-items: center;
    gap: 12px;
    
    > a {
        display: flex;
        
        position: relative;

        text-decoration: none;
        
        background-color: ${props => props.theme["yellow-light"]};
        
        padding: 8px;

        border-radius: 6px;
        
        > div {
            display: flex;
            align-items: center;
            justify-content: center;
            
            position: absolute;
            left: 28px;
            top: -12px;
            
            width: 25px;
            height: 25px;
            
            background-color: ${props => props.theme["yellow-dark"]};
            
            border-radius: 50%;
            
            > span {
                ${mixins.fonts.textS}
                
                color: ${props => props.theme.white};
            }
        }
        
        > svg {
            color: ${props => props.theme["yellow-dark"]};
        }
    }
`

export const LocationTag = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;

    background-color: ${props => props.theme["purple-light"]};

    padding: 8px;

    border-radius: 6px;

    > svg {
        color: ${props => props.theme["purple"]};
    }

    > span {
        color: ${props => props.theme["purple-dark"]};
    }
`
