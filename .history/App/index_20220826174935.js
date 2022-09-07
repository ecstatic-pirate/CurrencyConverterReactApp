import React from "react";
import Options from "./screens/Options";
import Home from "./screens/Home";
import CurrencyList from "./screens/CurrencyList";
import Navigation from "./config/Navigation";

import { api } from "./util/api";

api("shantu")
  .then((response) => {
    console.log("response", response);
  })
  .catch((error) => {
    console.log("error", error);
  });

export default () => <Navigation />;
