import styles from './styles.module.scss';
import plusIcon from '../../assets/+.svg';
import minusIcon from '../../assets/-.svg';
import CartIcon from '../../assets/cart-icon-card.svg';
import { CoffeeStock } from '../OurCoffees';
import { useCart } from '../../hooks/useCart';
import { useState } from 'react';

interface Props {
  listCoffees: CoffeeStock,
}


export function CoffeeUnity({ listCoffees }: Props) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrease() {
    setQuantity(state => state + 1)
  }

  function handleDecrease() {
    if (quantity === 1) return;
    setQuantity(state => state - 1)
  }

  const { addCoffeeToCart } = useCart()

  function handleAddToCart() {
    const coffeeToAdd = {
      ...listCoffees,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <div className={styles.main}>
      <img src={`/coffees/${listCoffees.photo}`} alt="Cafe" className={styles.coffeeImg} />
      <div className={styles.mainInfo}>
        <div>{listCoffees.tags.map(c => c.toUpperCase() + ' ')}</div>
        <h3>{listCoffees.name}</h3>
        <h6>{listCoffees.description}</h6>
      </div>
      <div className={styles.bottomInfo}>
        <div className={styles.bottomPrice}>{listCoffees.price}</div>
        <div className={styles.plusAndMinus}><span onClick={handleDecrease}><img src={minusIcon} alt="-" /></span> {quantity} <span onClick={handleIncrease}><img src={plusIcon} alt="+" /></span></div>
        <div className={styles.cartIcon}><img src={CartIcon} alt="cart" onClick={handleAddToCart} /></div>
      </div>
      <div>

      </div>
    </div>
  )
}