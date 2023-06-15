import Image from 'next/image';
import logo from "../../../../public/logoHeader.svg"
import styles from './styles.module.scss';
import { FiLogOut } from "react-icons/fi"


export const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.content}>
        <Image src={logo} alt='Logo DItalia Massas ' />
        <ul>
          <li>Nova categorias</li>
          <li>Produtos</li>
          <li> <FiLogOut color='#1C1C1C' size={20} /></li>
        </ul>
      </nav>
    </header>
  )
}

