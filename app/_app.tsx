import { AppProps } from "next/app";
import { Antonio } from "next/font/google";
import Head from "next/head";

const antonio = Antonio({
  weight: "100",
  subsets: ["latin"],
  variable: "--font-antonio",
});

<Head>
  <meta name="viewport" content="width=device-width, user-scalable=no" />
</Head>;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} className={antonio.className} />;
}
