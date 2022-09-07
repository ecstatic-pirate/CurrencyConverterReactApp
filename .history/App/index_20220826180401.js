import React from "react";
import Options from "./screens/Options";
import Home from "./screens/Home";
import CurrencyList from "./screens/CurrencyList";
import Navigation from "./config/Navigation";
import { ConversionContextProvider } from "./util/ConversionContext";

import { api } from "./util/api";

api("/latest?base=USD")
  .then((res) => console.log(res))
  .catch((err) => console.log("err", err));

export default () => (
  <ConversionContextProvider>
    <Navigation />
  </ConversionContextProvider>
);
