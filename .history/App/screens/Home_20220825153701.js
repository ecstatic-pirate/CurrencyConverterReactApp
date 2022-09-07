import React, { useState } from "react";
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
} from "react-native";
import { format } from "date-fns";
import colors from "../constants/colors";
import { ConversionInput } from "../components/ConversionInput";
import { Entypo } from "@expo/vector-icons";
import { ReverseCurrenciesButton } from "../components/Buttons";
import { KeyboardSpacer } from "../components/KeyboardSpacer";
import SafeViewAndroid from "../components/SafeViewAndroid";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  content: {
    paddingTop: screen.height * 0.2,
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

export default () => {
  const baseCurrency = "USD";
  const quoteCurrency = "GBP";
  const conversionRate = 0.89824;
  const date = "2020-03-23";

  const [scrollEnabled, setScrollEnabled] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <View style={styles.content}>
          <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
          <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.push("Options")} />
              <Entypo name="cog" size={32} color={colors.white} />
            </View>
          </SafeAreaView>

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
          <ConversionInput
            text="USD"
            value="123"
            onButtonPress={() => alert("todo!")}
            keyboardType="numeric"
            onChangeText={(text) => console.log("text", text)}
          />
          <ConversionInput
            text="GBP"
            value="123"
            onButtonPress={() => alert("todo!")}
            editable={false}
          />
          <Text style={styles.textFooter}>
            {" "}
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(
              new Date(date),
              "MMM dd, yyyy"
            )}`}
          </Text>

          <ReverseCurrenciesButton
            text="Reverse Currencies"
            onPress={() => alert("todo!")}
          />
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
