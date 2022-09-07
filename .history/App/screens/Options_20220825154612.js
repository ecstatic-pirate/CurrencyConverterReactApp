import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import colors from "../constants/colors";
import { Entypo } from "@expo/vector-icons";
import { RowItem, RowSeparator } from "../components/RowItem";
import SafeViewAndroid from "../components/SafeViewAndroid";

const openLink = (url) =>
  Linking.openURL(url).catch(() =>
    Alert.alert("Sorry, something went wrong.", "Please try again later.")
  );

export default () => {
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <ScrollView>
        <RowItem
          title="Themes"
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
          onPress={() => alert("todo")}
        />

        <RowSeparator />

        <RowItem
          title="React Native Basics"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() =>
            openLink(
              "https://learn.reactnativeschool.com/p/react-native-basics-build-a-currency-converter"
            )
          }
        />

        <RowSeparator />

        <RowItem
          title="React Native by Example"
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
          onPress={() => openLink("httpss://reactnativebyexample.com")}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
