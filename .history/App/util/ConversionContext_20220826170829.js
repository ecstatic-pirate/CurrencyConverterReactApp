import React, { createContext, useState } from "react";

export const ConversionContext = createContext();

export const ConversionContextProvider = (children) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [quoteCurrency, setQuoteCurrency] = useState("GBP");
  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  return <ConversionContext.Provider>{children}</ConversionContext.Provider>;
};
