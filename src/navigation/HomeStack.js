import React from "react";
import Home from "../screens/Home";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{ title: "Home" }} />
    </Stack.Navigator>
  );
}
