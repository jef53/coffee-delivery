import styles from './styles.module.scss'
import { CoffeeUnityOnCart } from '../CoffeeUnityOnCart'
import { useCart } from '../../hooks/useCart'


export function SelectedCoffees() {
  const { cartItems, totalPrice } = useCart()

  const DELIVERY_PRICE = 3.50;
  const sumTotalPrice = DELIVERY_PRICE + totalPrice;



  return (
    <div className={styles.main}>
      <div>
        {cartItems.map(c => (
          <CoffeeUnityOnCart key={c.id} coffee={c} />
        ))}
      </div>

      <div className={styles.cartInfo}>
        <div className={styles.leftInfo}>

        </div>




        <div className={styles.infoValues}>
          <p>Total de itens <span>R$  {(new Intl.NumberFormat('br-BR', { maximumSignificantDigits: 3 }).format(totalPrice))}</span></p>
          <p>Entrega  <span>R$ {(new Intl.NumberFormat('br-BR', { maximumSignificantDigits: 3 }).format(DELIVERY_PRICE))}</span></p>
          <p className={styles.total}>Total <span>R$ {(new Intl.NumberFormat('br-BR', { maximumSignificantDigits: 3 }).format(sumTotalPrice))}</span></p>
        </div>

        <button type='submit' className={styles.confirmOrder} disabled={cartItems.length < 1} >CONFIRMAR PEDIDO</button>
      </div>
    </div>
  )
}