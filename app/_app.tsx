import '../styles/globals.css'
import type {AppProps} from <next />

export default function App({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />
}