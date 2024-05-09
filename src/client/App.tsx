import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Image } from "react-native";
import { RootStackParamList } from "./src/navigation/TStack";
import TabNavigator, { StackAuth } from "./src/navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer, useLinkTo } from "@react-navigation/native";
import { ToastContextProvider } from "./src/context/ToastContext";
import { useFonts } from "expo-font";
import { IMAGES } from "./src/constants";

const Stack = createNativeStackNavigator<RootStackParamList>();
const client = new QueryClient();

export default function App() {
  let [fontLoaded] = useFonts({
    "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./src/assets/fonts/Roboto-Thin.ttf"),
  });

  if (!fontLoaded) {
    return (
      <View style={styles.container}>
        <Image source={IMAGES.GRADIENT} style={{ width: "100%", height: "100%" }} />
      </View>
    );
  }

  return (
    <QueryClientProvider client={client}>
      <NavigationContainer>
        <ToastContextProvider>
          <Layout />
        </ToastContextProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

export const Layout = () => {
  const currentUser = false;
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {currentUser ? (
        <Stack.Screen name="Tab" component={TabNavigator} />
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
