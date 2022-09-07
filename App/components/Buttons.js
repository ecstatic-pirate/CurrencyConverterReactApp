import React from "react";
import { TouchableOpacity, Image, StyleSheet, View, Text } from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
const styles = StyleSheet.create({
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
  buttonIcon: {
    color: colors.white,
    marginRight: 5,
    fontSize: 30,
  },
  button: {
    marginTop: 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export const ReverseCurrenciesButton = ({ onPress, text }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <MaterialCommunityIcons
        name="swap-horizontal-bold"
        style={styles.buttonIcon}
      />
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
