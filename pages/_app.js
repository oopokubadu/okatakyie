import TawkTo from "tawkto-react";
import MainLayout from "../components/Layouts/Main";
import "../styles/globals.css";
import Head from "next/head";
import { useEffect } from "react";
import { IS_CLIENT } from "../util/constants";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    if (IS_CLIENT) {
      const tawk = new TawkTo("63234a0454f06e12d894f13f", "1gd0ti8pa");
      tawk.showWidget();
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" sizes="100x100" href="/favicon.png" />
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
