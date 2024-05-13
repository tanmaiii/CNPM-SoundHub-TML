import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "../../utils";
import { useAuth } from "../../context/AuthContext";

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const { logout, currentUser } = useAuth();

  const handleLogout = () => {
    try {
      logout();
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>Name: {currentUser.email}</Text>
      <TouchableOpacity onPress={() => handleLogout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
    justifyContent: "center",
    alignItems: "center",
  },
});
