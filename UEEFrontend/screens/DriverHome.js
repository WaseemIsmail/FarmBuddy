import Home from "../DriverNavigation/Home";
import AllOrders from  "../DriverNavigation/AllOrders"
import Ongoing from "../DriverNavigation/Ongoing"
import Profile from "../DriverNavigation/Profile"
import Route from "../DriverNavigation/Route"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Tab = createBottomTabNavigator();

export default function BusHomePage() {
  return (
    <Tab.Navigator
      initialRouteName="DriverHome"
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
        name="AllOrders"
        component={AllOrders}
        options={{
          title: "All Orders",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="format-list-bulleted" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Ongoing"
        component={Ongoing}
        options={{
          title: "Ongoing",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="map-clock" size={size} color={color} />
          ),
        }}
      />
    <Tab.Screen
        name="Route"
        component={Route}
        options={{
          title: "Route",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="map-marker-outline" size={size} color={color} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      /> */}

      

    </Tab.Navigator>
  );
}
