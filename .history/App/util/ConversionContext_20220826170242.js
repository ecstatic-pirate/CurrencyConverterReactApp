import React, { createContext, useState } from "react";

export const ConversionContext = createContext();

export const ConversionContextProvider = (children) => {
  return <ConversionContext.Provider>{children}</ConversionContext.Provider>;
};
