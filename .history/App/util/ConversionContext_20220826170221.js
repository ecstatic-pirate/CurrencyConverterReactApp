import React, { createContext, useState } from "react";

export const ConversionContext = createContext();

export const ConversionContextProvider = () => {
  return <ConversionContext.Provider>children</ConversionContext.Provider>;
};
