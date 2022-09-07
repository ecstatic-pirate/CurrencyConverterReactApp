import React from "react";
import { StatusBar, FlatList } from "react-native";

import colors from "../constants/colors";

export default () => (
  <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
);
