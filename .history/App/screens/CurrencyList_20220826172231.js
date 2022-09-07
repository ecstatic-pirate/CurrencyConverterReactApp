import React, { useContext } from "react";
import { StatusBar, FlatList, View, StyleSheet } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import currencies from "../data/currencies.json";
import { RowItem, RowSeparator } from "../components/RowItem";
import colors from "../constants/colors";
import {
  ConversionContext,
  ConversionContextProvider,
} from "../util/ConversionContext";
const styles = StyleSheet.create({
  icons: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
});

export default ({ navigation, route = {} }) => {
  const insets = useSafeArea();
  const params = route.params || {};
  const { activeCurrency, onChange = () => {} } = params;
  const { setBaseCurrency, setQuoteCurrency } = useContext(ConversionContext);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => {
          let selected = false;
          if (params.isBaseCurrency & (item === baseCurr)) {
            selected = true;
          } else {
          }
          //const selected = params.activeCurrency === item;
          return (
            <RowItem
              title={item}
              onPress={() => {
                //onChange(item);
                if (params.isBaseCurrency) {
                  setBaseCurrency(item);
                } else {
                  setQuoteCurrency(item);
                }
                navigation.pop();
              }}
              rightIcon={
                selected && (
                  <View style={styles.icons}>
                    <Entypo name="check" size={20} color={colors.white} />
                  </View>
                )
              }
            />
          );
        }}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowSeparator />}
        ListFooterComponent={() => (
          <View style={{ paddingBottom: insets.bottom }} />
        )}
      />
    </View>
  );
};
