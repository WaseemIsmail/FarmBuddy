import COLORS from "../constants/colors";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import axios from "axios"; // Import axios
import  { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

const CancelDelivery = () => {
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Make an API call to fetch ongoing orders
    axios
      .get(`${process.env.API_URL}api/cancelledOrders`)
      .then((response) => {
        console.log("API Response:", response.data);
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cancel orders:", error);
      });
  }, []);

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
            Cancelled
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
                borderColor: 'transparent', // Make the border transparent
                marginRight: -90,
                borderRadius: 10,
                color: COLORS.white,
                }}
          >
          <Image
          source={require('../assets/icons8-arrow-50.png')}
        style={{
          width: 30,
          height: 30,
          marginLeft: -40,
          left: -180,
          top: -25,
          color: COLORS.white,
          transform: [{ rotate: '180deg' }],
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
          
        </View>

        <ScrollView style={{ marginTop: -30 }}>
        {orders.map((order) => (
          <View
         key={order.orderId}
            style={{
              backgroundColor: "#FFFEFD",
              paddingHorizontal: 20,
              borderRadius: 10,
              flexDirection: "row", // Align items horizontally
              alignItems: "center", // Align items vertically in the center
              justifyContent: "space-between", // Add this for space between items
              height: 160,
              elevation: 5,
            }}
          >
             
            <Image
              source={require("../assets/bubble-gum-avatar-icon.png")}
              style={{
                width: '12%',
                height: '24%',
                left: -2,
                top: -30,
              }}
              resizeMode="cover"
            />

            <Text
              style={{
                fontSize: 18,
                top: -30,
                left: 15,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Customer Name{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -20,
                left: -100,
                lineHeight: 30,
                color: "#222222"
              }}
            >
               {order.customerName}
            </Text>
            
            <Text
              style={{
                fontSize: 18,
                top: 0,
                left: -200,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Placed Date
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: 30,
                left: -270,
                lineHeight: 30,
                color: "#222222"
              }}
            >
            {order.placedDate}{"\n"}
            </Text>
            
            <Text
              style={{
                fontSize: 18,
                top: 35,
                left: -395,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Warehouse 
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: 65,
                left: -460,
                lineHeight: 30,
                color: "#222222"
              }}
            >
              {order.warehouse}{"\n"}
            </Text>
            

            
            <TouchableOpacity
              onPress={() => navigation.navigate("cancelDetail", { orderId: order._id })}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: 'transparent', // Make the border transparent
                marginRight: -90,
                borderRadius: 10,
      }}
    >
      <Image
        source={require('../assets/MicrosoftTeams-image.png')}
        style={{
          width: 30,
          height: 30,
          marginLeft: -40,
          left: -350,
          transform: [{ rotate: '90deg' }],
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

export default CancelDelivery;
