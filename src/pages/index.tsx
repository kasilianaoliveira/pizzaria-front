import Head from 'next/head';
import logoImg from '../../public/logo.svg';
import Image from 'next/image';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import styles from '../styles/home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title> D&apos;Italia Massas | Faça seu login</title>
      </Head>
      <div className={styles.container}>
        <Image src={logoImg} alt='Logo DItalia Massas ' />
        <div className={styles.login}>
          <form>
            <Input type='email' placeholder='Digite seu email' />
            <Input type='password' placeholder='Digite sua senha' />

            <Button type='submit' loading={false}>Acessar</Button>
          </form>
          <Link href="/signup" className={styles.account}>
            Não possui uma conta? <span>Cadastre-se</span>
          </Link>
        </div>
      </div>
    </>
  )
}
