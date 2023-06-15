import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home.module.scss"
import logoImg from "../../../public/logo.svg"

export default function Signup() {
  return (
    <>
    <Head>
      <title> Faça seu cadastro agora!</title>
    </Head>
    <div className={styles.container}>
      <Image src={logoImg} alt='Logo DItalia Massas ' />
      <div className={styles.login}>
        <h1>Criando sua conta</h1>
        <form>
        <Input type='text' placeholder='Digite nome da sua empresa' />
          <Input type='email' placeholder='Digite seu email' />
          <Input type='password' placeholder='Digite sua senha' />

          <Button type='submit' loading={false}>Cadastrar</Button>
        </form>
        <Link href="/" className={styles.account}>
          Já possui uma conta? <span>Faça login</span>
        </Link>
      </div>
    </div>
  </>
  )
}