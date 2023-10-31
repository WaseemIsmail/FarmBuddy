import axios from "axios";
import COLORS from "../constants/colors";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { Image } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#024F43" }}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 0,
          marginVertical: 20,
          backgroundColor: "white",
          bottom: -40,
          top: 50,
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Ongoing")}
            style={{
              marginTop: 0,
              marginBottom: 15,
              width: "67%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E1F7CC",
              padding: 20,
              borderRadius: 15,
            }}
          >
            <Image
              source={require("../assets/farmer.png")}
              style={{
                width: 120,
                height: 120,
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: 20,
              }}
            >
              Ongoing Cultivation
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("AddCrop")}
            style={{
              marginTop: 10,
              marginBottom: 15,
              width: "67%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#E1F7CC",
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/plant.png")}
              style={{
                width: 120,
                height: 120,
                marginBottom: 10,
              }} // Adjust width, height, and margin as needed
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: 20,
              }}
            >
              Add New Crop
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default Home;
