import styles from './styles.module.scss'
import dollarIcon from '../../assets/dollar-icon2.svg'
import iconLocation from '../../assets/Icon-location2.svg'
import iconclock from '../../assets/icon-clock.svg'
import LogoSuccess from '../../assets/successLogo.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CompleteOrder'
import { paymentMethods } from '../../components/PaymentOptions'
import { useEffect } from 'react'

interface LocationTtype {
  state: OrderData,
}

export function Success() {

  const { state } = useLocation() as unknown as LocationTtype;
  const navigate = useNavigate()
  useEffect(() => {
    if (!state) return (
      navigate("/")
    )
  },
    [])

  if (!state) return <></>

  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <h1>Uhu! Pedido confirmado</h1>
        <h4>Agora é só aguardar que logo o café chegará até você</h4>

        <div className={styles.containerData}>
          <div className={styles.module}>
            <div><img src={iconLocation} alt='cart' />
              {state.street} {state.number}<br />
              {state.neighborhood} {state.city}
            </div>
            <div><img src={iconclock} alt='cart' />
              Previsão de entrega<br />
              20 min - 30 min </div>
            <div><img src={dollarIcon} alt='cart' />
              Pagamento na entrega<br />
              {paymentMethods[state.paymentMethod].label}</div>
          </div>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <img src={LogoSuccess} alt="logoSuccess" />
      </div>
    </div>
  )
}