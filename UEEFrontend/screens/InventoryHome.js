import Home from "../InventoryNavigation/Home";
import Damage from "../InventoryNavigation/Damage";
import OrderList from "../InventoryNavigation/OrderList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";

const Tab = createBottomTabNavigator();

export default function InventoryHome() {
  return (
    <Tab.Navigator
      initialRouteName="InventoryHome"
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
        name="OrderList"
        component={OrderList}
        options={{
          title: "Order",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="order-bool-ascending"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Damage Item"
        component={Damage}
        options={{
          title: "Damge Item",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="delete-empty"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="account"
        component={Home}
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
