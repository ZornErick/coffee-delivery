import {InputHTMLAttributes} from "react";
import {RadioContainer} from "./styles.ts";


interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isSelected: boolean;
}

export function RadioInput({children, isSelected, ...props}: RadioInputProps) {
    return (
        <RadioContainer data-state={isSelected}>
            <input type={"radio"} {...props} />
            {children}
        </RadioContainer>
    );
}
