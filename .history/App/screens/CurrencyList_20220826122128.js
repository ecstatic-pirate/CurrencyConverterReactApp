import React from "react";
import { StatusBar, FlatList, View } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import colors from "../constants/colors";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";

export default () => (

const insets = useSafeArea() 
  <View>
    <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
    <FlatList
      data={currencies}
      renderItem={({ item }) => {
        return <RowItem title={item} />;
      }}
      keyExtractor={(item) => item}
      ItemSeparatorComponent={({ item }) => {
        return <RowSeparator />;
      }}
    />
  </View>
);
