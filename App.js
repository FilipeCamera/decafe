import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import {useFonts} from '@use-expo/font'
import { AuthProvider } from "./src/contexts/authContext";
import Routes from "./src/routes";



export default function App() {
  let loadedFont = useFonts({
    'brush-script-mt-italic': require('./assets/fonts/brush-script-mt-italic.ttf')
  })
  return (
    <AuthProvider>
      <NavigationContainer>
          <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
