import mainLogo from '../../assets/coffee-logo.svg'
import iconbox from '../../assets/icon-box.svg'
import iconcart from '../../assets/icon-cart.svg'
import iconclock from '../../assets/icon-clock.svg'
import iconcoffee from '../../assets/icon-coffee.svg'


import styles from './styles.module.scss'

export function Introduction() {
  return (
    <main className={styles.main}>
      <div>
        <div className={styles.leftBlock}>
          <div className={styles.mainInfo}>
            <h1>Encontre o café perfeito
              para qualquer hora do dia
            </h1>
            <h5>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h5>
          </div>

          <div className={styles.description}>
            <div><img src={iconcart} alt='cart' />Compra simples e segura</div>
            <div><img src={iconbox} alt='cart' />Embalagem mantém o café intacto</div>
            <div><img src={iconclock} alt='cart' />Entrega rápida e rastreada</div>
            <div><img src={iconcoffee} alt='cart' />O café chega fresquinho até você</div>
          </div>

        </div>
      </div>

      <div className={styles.rightBlock}>
        <img src={mainLogo} alt='Café' />
      </div>
    </main>
  )
}