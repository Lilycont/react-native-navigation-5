import React from "react";
import About from "../screens/About";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "About" }}
      />
    </Stack.Navigator>
  );
}
