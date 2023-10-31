import axios from "axios";
import COLORS from "../constants/colors";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";

const StockHome = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.Lightgreen }}>
      <View
        style={{
          height: "30%", // Set the height to 40% of the screen
          backgroundColor: "#024F43",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          borderBottomLeftRadius: 10, // Adjust this value as needed for the desired oval shape
          borderBottomRightRadius: 10, // Adjust this value as needed for the desired oval shape
        }}
      ></View>

      <View
        style={{
          alignItems: "center", // Center the content vertically
          marginHorizontal: 22,
          top: 40,
          paddingLeft: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            left: 40,
            fontSize: 30,
            fontWeight: "bold",
            marginVertical: 8,
            color: "white",
            bottom: 25,
          }}
        >
          WareHouses
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            height: 52,
            borderWidth: 1,
            borderColor: "transparent", // Make the border transparent
            marginRight: -90,
            borderRadius: 10,
            color: "white",
          }}
        >
          <Image
            source={require("../assets/icons8-arrow-50.png")}
            style={{
              width: 30,
              height: 30,
              marginLeft: -40,
              right: 280,
              top: -25,
              color: "white",
              transform: [{ rotate: "180deg" }],
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          margin: 20,
          top: 50,
          paddingTop: 40,
          paddingLeft: 5,
          borderRadius: 40,
          width: "90%", // Adjust the width to zoom the image
          height: "20%", // Adjust the height to zoom the image
          backgroundColor: "#C4E4A6", // Change the background color to gray
          alignItems: "center", // Center the content horizontally
          shadowColor: "black", // Shadow color
          shadowOffset: { width: 0, height: 4 }, // Shadow offset
          shadowOpacity: 0.5, // Shadow opacity
          elevation: 5, // Android shadow elevation
        }}
      >
        <Text
          style={{
            fontSize: 18,
            right: 30,
            top: -20,
            marginVertical: 20,
            fontWeight: "normal",
            color: "#7B6F6F",
          }}
        >
          Welcome To WareHouses.....
        </Text>
        <Text style={{ fontSize: 25, right: 10, top: -40 }}>
          choose the WareHouses
        </Text>
      </View>

      <View style={[styles.container, styles.moveUp, styles.containerMove]}>
        <TouchableOpacity onPress={() => navigation.navigate("WareHouses")}>
          <View style={styles.box}>
            <Image
              style={{
                position: "absolute",
                top: 10, // Adjust the position of the image as needed
                left: 45, // Adjust the position of the image as needed
                width: "40%", // Adjust the width to zoom the image
                height: "60%",
              }}
              source={require("../assets/casual-life-3d-cursor.png")}
            />
            <Text style={{ fontSize: 20, left: 20, top: 110, color: "white" }}>
              Maharagama
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("pressed")}>
          <View style={styles.box}>
            <Image
              style={{
                position: "absolute",
                top: 10, // Adjust the position of the image as needed
                left: 45, // Adjust the position of the image as needed
                width: "40%", // Adjust the width to zoom the image
                height: "60%", // Adjust the height to zoom the image
              }}
              source={require("../assets/casual-life-3d-cursor.png")}
            />
            <Text style={{ fontSize: 20, left: 27, top: 110, color: "white" }}>
              Homagama
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => console.log("pressed")}>
          <View style={[styles.box, styles.leftBox]}>
            <Image
              style={{
                position: "absolute",
                top: 10, // Adjust the position of the image as needed
                left: 50, // Adjust the position of the image as needed
                width: "40%", // Adjust the width to zoom the image
                height: "60%", // Adjust the height to zoom the image
              }}
              source={require("../assets/casual-life-3d-cursor.png")}
            />

            <Text style={{ fontSize: 20, left: 40, top: 110, color: "white" }}>
              Kottawa
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  box: {
    width: 155,
    height: 155,
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#025F40",
    shadowColor: "black",
    elevation: 10,
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 10,
    shadowRadius: 10,
  },
  leftBox: {
    left: 80, // Apply the left property to the third box
  },
  moveUp: {
    top: 80, // Adjust this value to move the view up
  },
  containerMove: {
    left: 40,
  },
});

export default StockHome;
