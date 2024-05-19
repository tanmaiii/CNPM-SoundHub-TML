import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, StyleSheet, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useFonts } from "expo-font";
import React, { useEffect, useState } from "react";
import { COLORS, FONTFAMILY } from "./src/theme/theme";

import { AuthContextProvider } from "./src/context/AuthContext";
import { ToastContextProvider } from "./src/context/ToastContext";
import AppRouter from "./src/navigators/AppRouter";
import { WINDOW_HEIGHT, WINDOW_WIDTH } from "./src/utils";


const client = new QueryClient();

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  let [fontsLoaded] = useFonts({
    "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Light": require("./src/assets/fonts/Roboto-Light.ttf"),
    "Roboto-Medium": require("./src/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Thin": require("./src/assets/fonts/Roboto-Thin.ttf"),
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFontLoaded(fontsLoaded);
    }, 4000);

    return () => clearTimeout(timeout);
  }, [fontsLoaded]);

  if (!fontLoaded) {
    return <></>
  }

  return (
    <QueryClientProvider client={client}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <ToastContextProvider>
          <AuthContextProvider>
                <GestureHandlerRootView style={{ flex: 1 }}>
                  <BottomSheetModalProvider>
                    <View style={styles.container}>
                      <AppRouter />
                    </View>
                  </BottomSheetModalProvider>
                </GestureHandlerRootView>
          </AuthContextProvider>
        </ToastContextProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: FONTFAMILY.medium,
    backgroundColor: COLORS.Black1,
    position: "relative",
    height: WINDOW_HEIGHT,
    width: WINDOW_WIDTH,
  },
});
