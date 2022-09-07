import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Entypo } from "@expo/vector-icons";
import Home from "../screens/Home";
import Options from "../screens/Options";
import CurrencyList from "../screens/CurrencyList";
import colors from "../constants/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

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
    {/* <MainStack.Screen
      name="CurrencyList"
      component={CurrencyList}
      options={({ route }) => ({ title: route.params && route.params.title })}
    /> */}
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
      options={({ route }) => ({
        title: route.params && route.params.title,
        headerLeft: null,
        headerRight: () => (
          <TouchableOpacity>
            <Entypo name="cross" size={30} color={colors.blue} />
          </TouchableOpacity>
        ),
      })}
    />
  </ModalStack.Navigator>
);

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);
