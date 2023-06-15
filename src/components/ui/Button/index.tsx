import { ButtonHTMLAttributes, ReactNode } from "react"
import { BiLoaderAlt } from 'react-icons/bi'

import styles from './styles.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: ReactNode;
}

export const Button = ({ loading, children, ...rest }: ButtonProps) => {
  return (
    <button className={styles.button} disabled={loading} {...rest}>
      {
        loading ? (<BiLoaderAlt color="#FFF" size={16} />)
          : (
            <a className={styles.buttonText}>{children}</a>
          )
      }
    </button>
  )
}
