import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RootStackParamList } from "./TStack";
import HomeScreen from "../screens/HomeScreen";
import SongDetail from "../screens/SongDetail";

const Stack = createNativeStackNavigator<RootStackParamList>();


interface HomeNavigatorProps {}

const HomeNavigator = (props: HomeNavigatorProps) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      
      <Stack.Screen name="Song" component={SongDetail} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({
  container: {},
});
