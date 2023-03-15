import { createContext, ReactNode, useEffect, useState } from "react";
import { CoffeeStock } from "../components/OurCoffees";
import { produce } from 'immer'

export interface CartItem extends CoffeeStock {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[],
  addCoffeeToCart: (coffee: CartItem) => void,
  removeItem: (coffee: CartItem) => void,
  changeQuantityOfCard: (coffee: CartItem, type: 'increase' | 'decrease') => void,
  totalPrice: number,
  cartQuantity: number,
  cleanCart: () => void,
}

interface CartContextProviderProps {
  children: ReactNode,
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)



export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storagedItems = localStorage.getItem('COFFEE_ITEMS_STORAGE_KEY');
    if (storagedItems) {
      return JSON.parse(storagedItems);
    } else {
      return [];
    }
  }
  )

  const totalPrice = cartItems.reduce((total, value, i) => {
    return total + value.quantity * value.price;
  }, 0)

  const cartQuantity = cartItems.length;

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistInCart].quantity += coffee.quantity;
      }
    })

    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem('COFFEE_ITEMS_STORAGE_KEY', JSON.stringify(cartItems))
  },
    [cartItems])

  function changeQuantityOfCard(coffee: CartItem, type: 'increase' | 'decrease') {
    const cartUnity = cartItems.findIndex(cartItem => cartItem.id === coffee.id)

    const newCart = produce(cartItems, (draft) => {
      draft[cartUnity].quantity += type === 'increase' ? + 1 : -1
    })
    setCartItems(newCart)
  }

  function removeItem(coffee: CartItem) {
    const cartUnity = cartItems.filter(cartItem => cartItem.id !== coffee.id)
    setCartItems(cartUnity)
  }



  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCart, cartQuantity, changeQuantityOfCard, removeItem, cleanCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}