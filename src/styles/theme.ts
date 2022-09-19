import { extendTheme } from "@chakra-ui/react";
import 'react-toastify/dist/ReactToastify.css'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181823",
      "800": "#1F1F1F",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616488",
      "400": "#797D9A",
      "300": "#9699BB",
      "288": "#B3B5C6",
      "200": "#d2d2da",
      "100": "#D1D2DC",
      "80": "#E9E9E9",
      "50": "#ffffff",
      "20": "#434343",
    },
    blue: {
      "900": "#151635",
    },
    yellow: {
      "500": "#F8BB00",
      "800": "#B58C0E",
    },
    red: {
      "100": "#E6191E"
    },
    green: {
      "400": "#34af23",
      "500": "#00a878",
      "800": "#008c5f",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    p: "Poppins",
  },
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});
