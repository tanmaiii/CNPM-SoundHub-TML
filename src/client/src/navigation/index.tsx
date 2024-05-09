import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { COLORS, FONTFAMILY, HEIGHT, SPACING } from "../theme/theme";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import WelcomeScreen from "../screens/AuthScreen/Welcome";
import SignupScreen from "../screens/AuthScreen/Signup";

import { RootStackParamList } from "./TStack";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

export const StackAuth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"Welcome"} component={WelcomeScreen} />
      <Stack.Screen name={"Signup"} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export const StackNavigatorHome = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"Home"} component={HomeScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black2,
          height: HEIGHT.navigator,
          borderTopWidth: 0,
          borderTopColor: COLORS.Black1,
          zIndex: 9999,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={StackNavigatorHome}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.activeBackground}>
              <FontAwesomeIcon
                icon={faHouse}
                size={20}
                color={focused ? COLORS.Primary : COLORS.White2}
              />
              <Text
                style={[
                  styles.title,
                  focused ? { color: COLORS.Primary } : { color: COLORS.White2 },
                ]}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeBackground: {
    flexDirection: "column",
    alignItems: "center",
    gap: SPACING.space_4,
  },
  title: {
    fontSize: 11,
    fontFamily: FONTFAMILY.regular,
  },
});

export default TabNavigator;
