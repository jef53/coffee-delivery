import { forwardRef, InputHTMLAttributes } from "react";
import { ContentContainer, PaymentMethodContainer } from "./styles";

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: string,
  label: string,
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>

          <img src={`/paymentIcons/${icon}`} alt="Cafe" />
          {label}

        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})