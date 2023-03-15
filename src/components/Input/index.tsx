import { forwardRef, InputHTMLAttributes } from "react";
import { InputStyleContainer, InputWrapper, ErrorContainer, RightText, InputStyled } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string,
  rightText?: string,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, ...props }, ref) => {
    return (

      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer >
        <ErrorContainer> {error && (<div>{error}</div>)}</ErrorContainer>
      </InputWrapper >


    )
  }
)