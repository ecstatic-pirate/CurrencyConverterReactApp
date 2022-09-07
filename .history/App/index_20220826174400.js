import React from "react";
import Options from "./screens/Options";
import Home from "./screens/Home";
import CurrencyList from "./screens/CurrencyList";
import Navigation from "./config/Navigation";

import { api } from "./util/api";

api().then(response () => {console.log("response", response);}).catch();

export default () => <Navigation />;
