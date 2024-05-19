import * as React from "react";
import {
  faHouse,
  faMagnifyingGlass,
  faRecordVinyl,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import { COLORS, FONTFAMILY, HEIGHT, SPACING } from "../theme/theme";
import { RootStackParamList } from "./TStack";
import { WINDOW_WIDTH } from "../utils";
import HomeNavigator from "./HomeNavigator";

interface TabNavigatorProps {}

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigator = (props: TabNavigatorProps) => {
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
        component={HomeNavigator}
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

export default TabNavigator;

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
