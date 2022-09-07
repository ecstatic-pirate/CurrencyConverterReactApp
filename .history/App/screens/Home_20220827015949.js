import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import { format } from "date-fns";
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { Entypo } from "@expo/vector-icons";
import { ReverseCurrenciesButton } from "../components/Buttons";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import SafeViewAndroid from "../components/SafeViewAndroid";
import { ConversionContext } from "../util/ConversionContext";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  content: {
    paddingTop: screen.height * 0.1,
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    marginBottom: 20,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  textFooter: {
    color: colors.white,
    textAlign: "center",
    fontSize: 14,
  },
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
});

export default ({ navigation }) => {
  const [value, setValue] = useState("100");

  const {
    baseCurrency,
    quoteCurrency,
    swapCurrencies,
    setBaseCurrency,
    setQuoteCurrency,
    date,
    rates,
    isLoading,
  } = useContext(ConversionContext);

  const conversionRate = rates[quoteCurrency];

  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
          <StatusBar barStyle="light-content" backgroundColor={colors.blue} />

          <View style={styles.logoContainer}>
            <Image
              source={require("../assets/images/background.png")}
              style={styles.logoBackground}
              resizeMode="contain"
            />
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.textHeader}>Currency Converter</Text>
          {isLoading ? : (
            <ActivityIndicator color={colors.white} size="large" />
          ) : *

          <ConversionInput
            text={baseCurrency}
            value={value}
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Base Currency",
                activeCurrency: baseCurrency,
                //onChange: (currency) => setBaseCurrency(currency),
                isBaseCurrency: true,
              })
            }
            keyboardType="numeric"
            onChangeText={(text) => setValue(text)}
          />
          <ConversionInput
            text={quoteCurrency}
            value={
              value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
            }
            editable={false}
            onButtonPress={() =>
              navigation.push("CurrencyList", {
                title: "Quote Currency",
                activeCurrency: quoteCurrency,
                //onChange: (currency) => setQuoteCurrency(currency),
                isBaseCurrency: false,
              })
            }
          />
          <Text style={styles.textFooter}>
            {" "}
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${
              date && format(new Date(date), "MMM do, yyyy")
            }`}
          </Text>

          <ReverseCurrenciesButton
            text="Reverse Currencies"
            onPress={() => swapCurrencies()}
          />

        }
          <KeyboardSpacer
            onToggle={(visible) => {
              setScrollEnabled(visible);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};
