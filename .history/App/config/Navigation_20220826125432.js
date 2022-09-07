import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator
  //initialRouteName="CurrencyList"
  >
    <MainStack.Screen
      name="Home"
      component={Home}
      options={{ headerShown: false }}
    />
    <MainStack.Screen name="Options" component={Options} />
    <MainStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ route }) => ({ title: route.params && route.params.title })}
    />
  </MainStack.Navigator>
);

const ModalStack = createStackNavigator();
const ModalStackScreen = () => (
  <ModalStack.Navigator screenOptions={{ presentation: "modal" }}>
    <ModalStack.Screen
      name="Main"
      component={MainStackScreen}
      options={{ headerShown: false }}
    />
    <ModalStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ route }) => ({ title: route.params && route.params.title })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);
