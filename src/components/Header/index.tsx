import styles from "./styles.module.scss";
import LogoImg from "../../assets/logo.svg"
import { MdLocationPin } from 'react-icons/md'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();
  return (


    <header className={styles.mainContainer}>
      <Link to="/">
        <div className={styles.logoContainer}>
          <img src={LogoImg} />
        </div>
      </Link>
      <div className={styles.rightContainer}>
        <div className={styles.location}>
          <MdLocationPin size={25} /> São José dos Campos, SP
        </div>
        <Link to="/completeOrder">
          <div className={styles.cart}>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <FaShoppingCart size={20} />

          </div>
        </Link>
      </div>
    </header>


  )
}