import React from "react";

import Pedidos from "../screens/Pedidos";

import { createStackNavigator } from "@react-navigation/stack";
import DrawerNavigation from "../routes/Drawer.routes";




const Stack = createStackNavigator();

export default function AppRoute() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pedidos"
        component={Pedidos}
      />
    </Stack.Navigator>
  );
}
