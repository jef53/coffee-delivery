import ExpressoCoffee from '../../assets/expresso.svg'
import BinIcon from '../../assets/thrash.svg'
import plusIcon from '../../assets/+.svg'
import minusIcon from '../../assets/-.svg'
import styles from './styles.module.scss'
import { CartItem } from '../../contexts/CartContext'
import { useCart } from '../../hooks/useCart'

interface ShippingAdressProps {
  coffee: CartItem,
}

export function CoffeeUnityOnCart({ coffee }: ShippingAdressProps) {
  const { changeQuantityOfCard, removeItem } = useCart()



  function handleIncrease() {
    changeQuantityOfCard(coffee, 'increase')
  }

  function handleDecrease() {
    if (coffee.quantity <= 1) return;
    changeQuantityOfCard(coffee, 'decrease')
  }

  function handleRemoveItem() {
    removeItem(coffee)
  }




  return (
    <div className={styles.main}>
      <img src={`coffees/${coffee.photo}`} alt="Expresso" />
      <div className={styles.coffeeTitle}>
        {coffee.name}
        <div className={styles.addAndRemove}>
          <div className={styles.plusAndMinus}><span onClick={handleDecrease}><img src={minusIcon} alt="-" /></span> {coffee.quantity} <span onClick={handleIncrease}><img src={plusIcon} alt="+" /></span></div>
          <div className={styles.binIcon} onClick={handleRemoveItem}><img src={BinIcon} alt="binicon" /> REMOVER</div>
        </div>



      </div>
      <div className={styles.coffeePrice}>
        {coffee.price}
      </div>

    </div>
  )
}