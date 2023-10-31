import Button from "../components/Button";
import COLORS from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Pressable, Image } from "react-native";

const Welcome = ({ navigation }) => {
  return (
    <LinearGradient
      style={{
        flex: 1,
      }}
      colors={[COLORS.lightGreen, COLORS.medium]}
    >
      <Button
        title="Customer"
        onPress={() => navigation.navigate("CustomerHome")}
        style={{
          marginTop: 22,
          width: "100%",
          fontWeight: "bold",
        }}
      />
      <Button
        title="Cultivation"
        onPress={() => navigation.navigate("CultivationHome")}
        style={{
          marginTop: 22,
          width: "100%",
          fontWeight: "bold",
        }}
      />
      <Button
        title="Inventory"
        onPress={() => navigation.navigate("InventoryHome")}
        style={{
          marginTop: 22,
          width: "100%",
          fontWeight: "bold",
        }}
      />
      <Button
        title="Driver"
        onPress={() => navigation.navigate("DriverHome")}
        style={{
          marginTop: 22,
          width: "100%",
          fontWeight: "bold",
        }}
      />
    </LinearGradient>
  );
};

export default Welcome;
