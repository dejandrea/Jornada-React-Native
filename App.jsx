import React from "react";
import TabNavigator from "./src/TabNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";
// import { theme } from "./src/theme";
import { useFonts } from "expo-font";
import { Roboto_700Bold } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const theme = {
  colors: {
    red: "tomato",
    dark: "#1c1a1d",
    light: "#eaeaea",
  },
  fonts: {
    roboto700: "Roboto_700Bold",
  },
};

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_700Bold });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // impede a renderização até que a fonte carregue
  }
  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <ThemeProvider theme={theme}>
        <TabNavigator />
      </ThemeProvider>
    </View>
  );
}
