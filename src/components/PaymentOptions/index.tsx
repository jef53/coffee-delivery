import styles from './styles.module.scss'
import dollarIcon from '../../assets/icon-payment.svg'
import creditIcon from '../../assets/icon-creditcard.svg'
import debitIcon from '../../assets/icon-debitcard.svg'
import moneyIcon from '../../assets/icon-money.svg'
import { PaymentMethodInput } from './PaymentMethodInput'
import { useFormContext } from 'react-hook-form'

export const paymentMethods = {
  credit: {
    label: "Cartão de crédito",
    icon: 'icon-creditcard.svg',
  },
  debit: {
    label: "Cartão de debito",
    icon: 'icon-debitcard.svg',
  },
  cash: {
    label: "Dinheiro",
    icon: 'icon-money.svg',
  },
}


export function PaymentOptions() {
  const { register, formState: { errors } } = useFormContext();

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string;
  return (
    <div className={styles.main}>
      <div className={styles.paymentTitle}>
        <img src={dollarIcon} alt="dollarIcon" />
        <div >
          <h3>Pagamento</h3>
          <h5>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h5>
        </div>
      </div>

      <div className={styles.choosePayment}>
        <div>
          {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
            <PaymentMethodInput
              key={label}
              icon={icon}
              id={key}
              label={label}
              value={key}
              {...register("paymentMethod")}
            />
          ))}
          <div className={styles.errorContainer}>{paymentMethodError && paymentMethodError}</div>
        </div>


      </div>


    </div>
  )
}