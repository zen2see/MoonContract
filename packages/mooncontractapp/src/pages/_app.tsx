import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import '../index.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps} />
    
  )
}

export default App