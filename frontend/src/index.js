import ReactDom from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.js";

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
      <BrowserRouter />
    </ChakraProvider>
  </Provider>
  //,
  //document.querySelector("#root")
);
