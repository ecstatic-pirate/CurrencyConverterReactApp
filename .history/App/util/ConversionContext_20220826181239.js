import React, { createContext, useState } from "react";
import { api } from "./api";

export const ConversionContext = createContext();

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");

  const setBaseCurrency = (currency) => {
    return api(`/latest/base?=${currency}`)
      .then((response) => console.log("response"))
      .error();
    _setBaseCurrency(currency);
  };

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
