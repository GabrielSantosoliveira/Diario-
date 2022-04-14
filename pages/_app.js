import Head from "next/head";
import "../styles/style.css";
import {cor} from "../styles/themes"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />

      <style global jsx>
          {`
          
            body{
                background-color: ${cor.fundo};
            }
          `}
      </style>

    </>
  )
  
}

export default MyApp;
