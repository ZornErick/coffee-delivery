import {ReactElement} from "react";

import {IconCircle} from "../../../Home/components/RoundedIconText/styles.ts";
import {InfoTagContainer, InfoTagText} from "./styles.ts";
import {Icon} from "@phosphor-icons/react";
import {ThemeColor} from "../../../../styles/themes/default.ts";


interface InfoTagProps {
    Icon: Icon;
    iconBackgroundColor: ThemeColor;
    iconColor?: ThemeColor;
    firstText: ReactElement<HTMLSpanElement>;
    secondText: ReactElement<HTMLSpanElement>;
}

export function InfoTag({ Icon, iconBackgroundColor, iconColor = "white", firstText, secondText }: InfoTagProps) {
    return (
        <InfoTagContainer>
            <IconCircle $backgroundcolor={iconBackgroundColor} $iconcolor={iconColor}>
                <Icon size={16} weight={"fill"} />
            </IconCircle>
            <InfoTagText>
                {firstText}
                {secondText}
            </InfoTagText>
        </InfoTagContainer>
    );
}
