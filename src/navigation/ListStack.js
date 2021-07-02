import React from "react";
import list from "../screens/list";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function ListStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="list" component={list} options={{ title: "list" }} />
    </Stack.Navigator>
  );
}
