import React from "react";
import { StatusBar, FlatList, View } from "react-native";

import colors from "../constants/colors";
import currencies from "../data/currencies.json";

export default () => (
  <View>
    <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
    <FlatList data={currencies} renderItem=/>
  </View>
);
