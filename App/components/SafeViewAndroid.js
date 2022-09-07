import { StyleSheet, Platform, StatusBar } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

export default StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
