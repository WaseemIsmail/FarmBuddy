import axios from "axios";
import COLORS from "../constants/colors";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          height: "20%",
          backgroundColor: "#024F43",
          bottom: 70,
          paddingTop: 70,
          paddingLeft: 10,
          marginLeft: -50,
          marginRight: -30,
          marginHorizontal: 22,
          position: "relative", // Ensure the position is set to relative
        }}
      >
        <Text style={styles.title}>Inventory Home</Text>
        <Image
          source={require("../assets/bubble-gum-avatar-icon.png")}
          style={{
            position: "absolute", // Set position to absolute
            right: 50, // Adjust the right position as needed
            top: 70,
            width: 50,
            height: 50,
          }}
          resizeMode="cover"
        />
      </View>

      <View
        style={{
          height: 300,
          width: "100%",
          backgroundColor: "#024F43", // Set the background color to "#024F43"
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          top: 300,
        }}
      >
        <View
          style={{
            margin: 20,
            bottom: 50,
            paddingTop: 70,
            paddingLeft: 10,
            borderRadius: 20,
            width: "90%",
            height: "30%",
            backgroundColor: "#C4E4A6", // Set the background color to "C4E4A6"
            alignItems: "center",
            shadowColor: "black",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.5,
            elevation: 20,
          }}
        >
          <View
            style={{
              position: "absolute",
              right: 20,
              bottom: 20,
              width: 50,
              height: 50,
              backgroundColor: "white",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              shadowColor: "black",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.5,
              elevation: 20,
            }}
          />
          <Text style={{ left: 125, fontSize: 15, bottom: 35 }}> 20</Text>
        </View>
        <Text style={{ top: -135, left: 50, fontSize: 30 }}>New Order</Text>
        <TouchableOpacity onPress={() => navigation.navigate("StockHome")}>
          <View
            style={{
              height: 120,
              width: 120,
              backgroundColor: "#C4E4A6", // Set the background color for squareContainerRight
              borderRadius: 10,
              margin: 30,
              bottom: 100,
              left: 200,
            }}
          >
            <Image
              source={require("../assets/empty-closed-boxes-white-removebg-preview.png")}
              style={{
                left: 25,
                width: 70,
                height: 70,
                top: 10,
                bottom: 20,
              }}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 20,
                top: 10,
                left: 30,
                fontWeight: "800",
                bottom: 40,
              }}
            >
              Stocks
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("OrderList")}>
          <View
            style={{
              height: 120,
              width: 120,
              backgroundColor: "#C4E4A6", // Set the background color for squareContainer
              borderRadius: 10,
              margin: 30,
              bottom: 280,
              left: 20,
            }}
          >
            <Image
              source={require("../assets/cardboardbox.png")}
              style={{
                left: 25,
                width: 70,
                height: 70,
                top: 10,
              }}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 20,
                top: 10,
                left: 30,
                fontWeight: "800",
                bottom: 40,
              }}
            >
              Order
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    left: 60,
    top: 15,
    color: "white",
  },
});

export default Home;
