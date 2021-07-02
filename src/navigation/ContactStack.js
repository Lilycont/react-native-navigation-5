import React from "react";
import Contact from "../screens/Contact";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="contact"
        component={Contact}
        options={{ title: "Contact" }}
      />
    </Stack.Navigator>
  );
}
