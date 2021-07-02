import React from "react";
import Info from "../screens/Info";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function InfoStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="info" component={Info} options={{ title: "Info" }} />
    </Stack.Navigator>
  );
}
