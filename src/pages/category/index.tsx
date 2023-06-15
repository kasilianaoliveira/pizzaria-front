import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import Head from "next/head";
import styles from "./styles.module.scss"

import { Header } from "@/components/ui/Header";

export default function Categoria() {
  return (
    <>
      <Head>
        <title>Cadastro de categoria</title>
      </Head>
      <div>
        <Header />
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Nova categoria</h1>
            <form>
              <Input type='text' placeholder='Digite o nome para categoria' />
              <Button type='button' loading={false}>Cadastrar</Button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}