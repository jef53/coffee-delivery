import { PaymentOptions } from "../../components/PaymentOptions";
import { SelectedCoffees } from "../../components/SelectedCoffees";
import { ShippingAdress } from "../../components/ShippingAdress";
import { useCart } from "../../hooks/useCart";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { CompleteOrderContainer } from "./styles";
import { useNavigate } from "react-router-dom";

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData;






enum paymentMethods {
  credit = "credit",
  debit = "debit",
  cash = "cash",
}

const confirmOrderFormValidationSchema = zod.object({
  cep: zod.string().min(8, "CEP Inválido"),
  street: zod.string().min(1, "Insira a Rua"),
  number: zod.string().min(1, "Insira o Número"),
  complement: zod.string(),
  neighborhood: zod.string().min(1, "Insira o Bairro"),
  city: zod.string().min(1, "Insira a Cidade"),
  uf: zod.string().min(1, "Insira o Estado"),
  paymentMethod: zod.nativeEnum(paymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" }
    }
  }),

})



export function CompleteOrder() {

  const { cleanCart } = useCart()

  const navigate = useNavigate()

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOrderFormValidationSchema)
  })

  const { handleSubmit } = confirmOrderForm;


  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/success', {
      state: data,
    })
    cleanCart();
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CompleteOrderContainer onSubmit={handleSubmit(handleConfirmOrder)}>
        <div >
          <h2>Complete o seu pedido</h2>
          <ShippingAdress />
          <PaymentOptions />
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <SelectedCoffees />
        </div>
      </CompleteOrderContainer>
    </FormProvider>
  )
}