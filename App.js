import React from "react";
import { StatusBar, ActivityIndicator, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "@use-expo/font";
import { AuthProvider } from "./src/contexts/authContext";
import Routes from "./src/routes";

export default function App() {
  let loadedFont = useFonts({
    "brush-script-mt-italic": require("./assets/fonts/brush-script-mt-italic.ttf"),
  });
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent' translucent={true}/>
      <AuthProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </AuthProvider>
    </>
  );
}
