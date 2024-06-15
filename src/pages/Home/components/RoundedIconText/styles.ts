import styled from "styled-components";
import {mixins} from "../../../../styles/mixins.ts";

export const RoundedIconTextContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    > span {
        ${mixins.fonts.textM}
        color: ${props => props.theme["base-text"]};
    }
`

interface IconCircleProps {
    $backgroundcolor: string;
    $iconcolor: string;
}

export const IconCircle = styled.div<IconCircleProps>`
    display: flex;

    padding: 8px;

    background-color: ${props => props.theme[props.$backgroundcolor]};

    border-radius: 100%;
    
    svg {
        color: ${props => props.theme[props.$iconcolor]};
    }
`
