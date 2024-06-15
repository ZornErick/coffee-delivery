import {TextContainer} from "./styles.ts";
import {InputHTMLAttributes} from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function TextInput({onFocus, onBlur, ...props}: TextInputProps) {
    return (
        <TextContainer>
            <input
                type={"text"}
                onFocus={onFocus}
                onBlur={onBlur}
                {...props}
            />
        </TextContainer>
    );
}
