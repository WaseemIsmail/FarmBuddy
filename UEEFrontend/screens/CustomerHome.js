import Cart from "../CustomerNavigation/Cart";
import Favourite from "../CustomerNavigation/Favourite";
import Profile from "../CustomerNavigation/Profile";
import Shop from "../CustomerNavigation/Shop";
import COLORS from "../constants/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Tab = createBottomTabNavigator();

export default function BusHomePage() {
  return (
    <Tab.Navigator
      initialRouteName="CustomerHome"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.fresh,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          title: "Shop",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="store" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="cart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
