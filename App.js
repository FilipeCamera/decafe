import React, { useState, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";

import { AppLoading } from "expo";
import * as Font from "expo-font";
import { AuthProvider } from "./src/contexts/authContext";
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
