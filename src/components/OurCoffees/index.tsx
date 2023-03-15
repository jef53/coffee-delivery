import { useState } from 'react'
import { coffeeStock } from '../../coffeeStock'
import { CoffeeUnity } from '../CoffeeUnity'
import styles from './styles.module.scss'

export interface CoffeeStock {
  id: number,
  name: string,
  tags: string[],
  description: string,
  photo: string,
  price: number,
}

export function OurCoffees() {
  const [coffees, setCoffees] = useState<CoffeeStock[]>(coffeeStock)

  return (
    <>
      <div className={styles.title}>
        <h1>Nossos cafés</h1>
      </div>

      <div className={styles.main} >
        {coffees.map(c => (
          <div key={c.id} className={styles.container}>
            <CoffeeUnity listCoffees={c} />
          </div>
        ))}
      </div>
    </>
  )
}