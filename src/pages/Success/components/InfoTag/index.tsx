import {IconCircle} from "../../../Home/components/RoundedIconText/styles.ts";
import {InfoTagContainer, InfoTagText} from "./styles.ts";
import {Icon} from "@phosphor-icons/react";
import {ThemeColor} from "../../../../styles/themes/default.ts";


interface InfoTagProps {
    Icon: Icon;
    iconBackgroundColor: ThemeColor;
    iconColor?: ThemeColor;
    firstText: string;
    secondText: string;
}

export function InfoTag({ Icon, iconBackgroundColor, iconColor = "white", firstText, secondText }: InfoTagProps) {
    return (
        <InfoTagContainer>
            <IconCircle $backgroundcolor={iconBackgroundColor} $iconcolor={iconColor}>
                <Icon size={16} weight={"fill"} />
            </IconCircle>
            <InfoTagText>
                <span>{firstText}</span>
                <span>{secondText}</span>
            </InfoTagText>
        </InfoTagContainer>
    );
}
