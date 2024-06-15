import {Icon} from "@phosphor-icons/react";
import {IconCircle, RoundedIconTextContainer} from "./styles.ts";
import {ThemeColor} from "../../../../styles/themes/default.ts";

interface RoundedIconTextProps {
    Icon: Icon;
    text: string;
    iconBackgroundColor: ThemeColor;
    iconColor?: ThemeColor;
}

export function RoundedIconText({ Icon, text, iconBackgroundColor, iconColor = "white"}: RoundedIconTextProps) {
    return (
        <RoundedIconTextContainer>
            <IconCircle $backgroundcolor={iconBackgroundColor} $iconcolor={iconColor}>
                <Icon size={16} weight={"fill"} />
            </IconCircle>
            <span>{text}</span>
        </RoundedIconTextContainer>
    );
}
