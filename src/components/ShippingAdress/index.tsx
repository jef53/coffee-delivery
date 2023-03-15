import styles from './styles.module.scss'
import AdressIcon from '../../assets/icon-location.svg'
import { CartItem } from '../../contexts/CartContext'
import { useForm, useFormContext } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { Input } from '../Input';
import { useEffect } from 'react'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}




export function ShippingAdress() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType;



  return (
    <div className={styles.mainContainer}>
      <div className={styles.Address}>
        <img src={AdressIcon} alt="Address" />
        <div className={styles.AdressTitle}>
          <h3>Endereço de Entrega</h3>
          <h6>Informe o endereço onde deseja receber seu pedido</h6>
        </div>

      </div>
      <div>
        <div className={styles.formContainer}>
          <Input className={styles.cep} type="text" placeholder="CEP" {...register("cep")} error={errors.cep?.message} />
          <Input className={styles.street} type="text" placeholder="Rua" id="street" {...register("street")} error={errors.street?.message} />
          <Input type="text" placeholder="Número" id="number" {...register("number")} error={errors.number?.message} />
          <Input className={styles.complement} rightText="Opcional" type="text" placeholder="Complemento" id="complement" {...register("complement")} error={errors.complement?.message} />
          <Input type="text" placeholder="Bairro" id="bairro" {...register("neighborhood")} error={errors.neighborhood?.message} />
          <Input type="text" placeholder="Cidade" id="city" {...register("city")} error={errors.city?.message} />
          <Input type="text" placeholder="UF" id="uf" {...register("uf")} error={errors.uf?.message} />
        </div>
      </div>
    </div >
  )
}