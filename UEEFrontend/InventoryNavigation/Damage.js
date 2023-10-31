import COLORS from "../constants/colors";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image } from "react-native";

const Damage = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        {/* Top Square */}
        <View
          style={{
            height: "20%",
            backgroundColor: "#024F43",
            bottom: 50,
            paddingTop: 70,
            paddingLeft: 10,
            marginLeft: -50,
            marginRight: -30,
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              color: COLORS.white,
              left: 40,
            }}
          >
            Damaged Vegetable
          </Text>
        </View>

        <ScrollView style={{ marginTop: -30 }}>
          <View
            style={{
              backgroundColor: "#E1F7CC",
              paddingHorizontal: 20,
              borderRadius: 10,
              flexDirection: "row", // Align items horizontally
              alignItems: "center", // Align items vertically in the center
              justifyContent: "space-between", // Add this for space between items
            }}
          >
            <Text
              style={{
                fontSize: 20,
                marginTop: 10,
                marginBottom: 10,
                lineHeight: 30,
              }}
            >
              Onion{"\n"}
              Quantity(kg): 50{"\n"}
              Kottawa
            </Text>
            <Image
              source={require("../assets/casual-life-3d-closed-white-garbage-bin.png")}
              style={{
                width: 100,
                height: 80,
                marginLeft: 10,
              }}
              resizeMode="cover"
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Damage;
