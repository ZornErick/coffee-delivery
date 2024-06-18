import {ForwardedRef, forwardRef, InputHTMLAttributes} from "react";
import {RadioContainer} from "./styles.ts";


interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
    isSelected: boolean;
}

export const RadioInput =  forwardRef(function RadioInput({children, isSelected, ...props}: RadioInputProps, ref: ForwardedRef<HTMLInputElement>) {
    return (
        <RadioContainer data-state={isSelected}>
            <input type={"radio"} ref={ref} {...props} />
            {children}
        </RadioContainer>
    );
})
