import Home from "../CultivationNavigation/Home";
import Ongoing from "../CultivationNavigation/Ongoing";
import AddCrop from "../CultivationNavigation/AddCrop";
import Notification from "../CultivationNavigation/Notification";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Tab = createBottomTabNavigator();

export default function CultivationHome() {
  return (
    <Tab.Navigator
      initialRouteName="CultivationHome"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="store" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Ongoing"
        component={Ongoing}
        options={{
          title: "Ongoing",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="leaf" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="AddCrop"
        component={AddCrop}
        options={{
          title: "Add Crop",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="corn" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
