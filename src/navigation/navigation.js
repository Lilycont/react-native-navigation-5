import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeStack from "./HomeStack";
import ContactStack from "./ContactStack";
import AboutStack from "./AboutStack";
import InfoStack from "./InfoStack";
import ListStack from "./ListStack";
const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "pink",
        inactiveTintColor: "gray",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
          } else if (route.name === "contact") {
            iconName = focused ? "ios-clipboard" : "ios-clipboard-outline";
          } else if (route.name === "about") {
            iconName = focused ? "ios-compass" : "ios-compass-outline";
          } else if (route.name === "info") {
            iconName = focused ? "ios-disc" : "ios-disc-outline";
          } else if (route.name === "list") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="home"
        component={HomeStack}
        options={{ title: "Home", tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="contact"
        component={ContactStack}
        options={{ title: "Contact" }}
      />
      <Tab.Screen
        name="about"
        component={AboutStack}
        options={{ title: "About" }}
      />
      <Tab.Screen
        name="info"
        component={InfoStack}
        options={{ title: "Info" }}
      />
      <Tab.Screen
        name="list"
        component={ListStack}
        options={{ title: "List" }}
      />
    </Tab.Navigator>
  );
}
