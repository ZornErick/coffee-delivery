import {TextContainer} from "./styles.ts";
import {ForwardedRef, forwardRef, InputHTMLAttributes} from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const TextInput =  forwardRef(function TextInput({onFocus, onBlur, ...props}: TextInputProps, ref:  ForwardedRef<HTMLInputElement>) {
    return (
        <TextContainer>
            <input
                type={"text"}
                ref={ref}
                onFocus={onFocus}
                onBlur={onBlur}
                {...props}
            />
        </TextContainer>
    );
})
