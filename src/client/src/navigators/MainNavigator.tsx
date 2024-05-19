import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RootStackParamList } from "./TStack";
import TabNavigator from "./TabNavigator";
interface MainNavigatorProps {}


const MainNavigator = (props: MainNavigatorProps) => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
    <Stack.Screen name="Main" component={TabNavigator} />

    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({
  container: {},
});
