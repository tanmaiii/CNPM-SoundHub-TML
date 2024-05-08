import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useLinkTo } from "@react-navigation/native";
import { AuthContextProvider, useAuth } from "./src/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./src/navigation/TStack";
import TabNavigator, { StackAuth } from "./src/navigation";

const Tab = createBottomTabNavigator<RootStackParamList>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const client = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <AuthContextProvider>
          <View style={styles.container}>
            <Layout />
          </View>
        </AuthContextProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export const Layout = () => {
  const { currentUser } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {currentUser ? (
        <Stack.Screen name="Home" component={TabNavigator} />
      ) : (
        <Stack.Screen name="Auth" component={StackAuth} />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
