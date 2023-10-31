import axios from "axios";
import COLORS from "../constants/colors";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import ApiManager from "../ApiManager";
import { useRoute } from "@react-navigation/native";

const ViewDetails = ({ navigation }) => {
  const router = useRoute();
  const vegid = router.params?.vegetableid;
  const [inventorys, setInventorys] = useState();

  const getItem = async (id) => {
    try {
      const response = await ApiManager(`/api/inventory/${id}`, {
        method: "GET",
      });
      if (response.status === 200) {
        setInventorys(response.data);
      } else {
        console.error(response.data.error);
      }
    } catch (err) {
      console.error("Api Failed:", err);
      if (err.response) {
        console.error(err.response.data.error);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getItem(vegid);
    }, [ApiManager, vegid])
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
            View Details
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("WareHouses")}
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

        <View
          style={{
            backgroundColor: "white",
            height: 600,
            marginTop: 20,
            padding: 10,
            marginTop: -20,
          }}
        >
          <Image
            source={require("../assets/Carrot.png")}
            style={{
              width: "80%",
              height: "35%",
              left: 50,
              top: 20,
            }}
            resizeMode="cover"
          />
          <View
            style={{
              marginBottom: 30,
              marginTop: 50,
              left: 100,
            }}
          >
            <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 10 }}>
              {inventorys?.inventoryName}
            </Text>
            <Text style={{ fontSize: 20, marginTop: 5 }}>
              Quantity: {inventorys?.quantity}
            </Text>
            <Text style={{ fontSize: 20, marginTop: 5 }}>
              {inventorys?.warehouse}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", left: 50, bottom: 40 }}>
          {/* First TouchableOpacity */}
          <TouchableOpacity
            style={{
              height: 40,
              width: 120,
              backgroundColor: "#024F43",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: -20, // Adjust as needed
              marginLeft: 10, // Adjust as needed
            }}
            onPress={() => {
              navigation.navigate("AddDamge");
            }}
          >
            <Text style={{ color: COLORS.white, fontSize: 16 }}>
              Add Damgage
            </Text>
          </TouchableOpacity>

          {/* Second TouchableOpacity */}
          <TouchableOpacity
            style={{
              height: 40,
              width: 120,
              backgroundColor: "#024F43",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: -20, // Adjust as needed
              marginLeft: 10, // Adjust as needed
            }}
            onPress={() => {
              navigation.navigate("UpdateItem");
            }}
          >
            <Text style={{ color: COLORS.white, fontSize: 16 }}>
              Update Items
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ViewDetails;
