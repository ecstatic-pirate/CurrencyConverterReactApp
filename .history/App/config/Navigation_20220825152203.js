import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import Options from "../screens/Options";

const MainStack = createStackNavigator();
const MainStackScreen = () => (
  <MainStack.Navigator headerMode="none">
    <MainStack.Screen name="Home" component={Home} Options={}/>
    <MainStack.Screen name="Options" component={Options} />
  </MainStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <MainStackScreen />
  </NavigationContainer>
);
