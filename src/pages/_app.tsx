import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { Poppins } from 'next/font/google';
 
const poppins = Poppins({
  variable: '--font-poppins',
  subsets:['latin'],
  weight:['700','600', '500','400']
})
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
