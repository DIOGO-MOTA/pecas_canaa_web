import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { ParallaxProvider } from "react-scroll-parallax";
import FloatingWhatsApp from 'react-floating-whatsapp'

import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ParallaxProvider>
          <Header />
          <Component {...pageProps} />

          <ToastContainer autoClose={2000} />
          <FloatingWhatsApp 
          phoneNumber="5562993834795"
          accountName="Peças Canaã"
          statusMessage='Online'
          avatar="/logo.png"
          chatMessage="fale com Nocosco"
          placeholder='Mensagem'
          allowClickAway 
          notificationSound
           />
          <Footer/>
        </ParallaxProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
