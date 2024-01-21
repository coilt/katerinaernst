import { AppProps } from "next/app";
import { Antonio } from "next/font/google";

const antonio = Antonio({
  weight: "100",
  subsets: ["latin"],
  variable: "--font-antonio",
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={antonio.className} />;
}

<Head>
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
</Head>;
