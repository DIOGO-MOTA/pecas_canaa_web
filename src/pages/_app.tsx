import type { AppProps } from "next/app";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ToastContainer } from "react-toastify";
import { ParallaxProvider } from "react-scroll-parallax";

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
          <Footer/>
        </ParallaxProvider>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
