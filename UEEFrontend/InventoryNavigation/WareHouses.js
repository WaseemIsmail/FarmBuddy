import COLORS from "../constants/colors";
import React from "react";
import { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";
import ApiManager from "../ApiManager";

const WareHouses = () => {
  const navigation = useNavigation();
  const [inventorys, setInventorys] = useState();

  const fetchAllItems = async () => {
    try {
      const response = await ApiManager(`/api/inventory/`, {
        method: "GET",
      });
      if (response.status === 200) {
        setInventorys(response.data);
      } else {
        console.error(response.data.error);
      }
    } catch (err) {
      console.error("Api Failed:", err);
      if (err.response && err.response.status === 400) {
        console.error(err.response.data.error);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchAllItems();
    }, [ApiManager])
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F1FEE4" }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View
          style={{
            height: "17%",
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
              left: 80,
            }}
          >
            Maharagama WareHouse
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
              color: COLORS.white,
            }}
          >
            <Image
              source={require("../assets/icons8-arrow-50.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: -40,
                left: -180,
                top: -25,
                color: COLORS.white,
                transform: [{ rotate: "180deg" }],
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>

        <ScrollView style={{ marginTop: -30 }}>
          {inventorys?.map((inventory) => (
            <View
              key={inventory._id}
              style={{
                backgroundColor: "#FFFEFD",
                paddingHorizontal: 20,
                borderRadius: 10,
                flexDirection: "row", // Align items horizontally
                alignItems: "center", // Align items vertically in the center
                justifyContent: "space-between", // Add this for space between items
                height: 160,
                elevation: 5,
                marginBottom: 10,
              }}
            >
              <View>
                <Image
                  source={require("../assets/Carrot.png")}
                  style={{
                    width: "140%",
                    height: "50%",
                    left: 10,
                    top: 20,
                  }}
                  resizeMode="cover"
                />

                <Text
                  style={{
                    color: "#333",
                    fontSize: 16,
                    fontWeight: "bold",
                    left: 150,
                    bottom: 60,
                  }}
                >
                  {inventory.inventoryName}
                </Text>
                <Text
                  style={{
                    color: "#333",
                    fontSize: 16,
                    fontWeight: "bold",
                    left: 150,
                    bottom: 50,
                    color: "#025F40",
                  }}
                >
                  {inventory.price}
                </Text>
                <Text
                  style={{
                    color: "#333",
                    fontSize: 16,
                    fontWeight: "bold",
                    right: -150,
                    bottom: 40,
                  }}
                >
                  {inventory.quantity}
                </Text>

                <Text
                  style={{
                    color: "#333",
                    fontSize: 16,
                    fontWeight: "bold",
                    left: 150,
                    bottom: 30,
                  }}
                >
                  {inventory.warehouse}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ViewDetails", {
                    vegetableid: inventory._id,
                  })
                }
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
                }}
              >
                <Image
                  source={require("../assets/icons8-collapse-arrow-64.png")}
                  style={{
                    width: 30,
                    height: 30,
                    marginLeft: -40,
                    left: 80,
                    transform: [{ rotate: "90deg" }],
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WareHouses;
