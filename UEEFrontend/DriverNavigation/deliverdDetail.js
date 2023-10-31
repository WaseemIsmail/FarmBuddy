import {  ScrollView, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";

import axios from "axios"; // Import axios
import  { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

const SpecificOrderDetail = () => {
  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Make an API call to fetch ongoing orders
    axios
      .get(`${process.env.API_URL}api/deliveredOrder`)
      .then((response) => {
        console.log("API Response:", response.data);
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cancel orders:", error);
      });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F1FEE4"}}>
     
      <View
        style={{
          height: "17%",
          backgroundColor: "#024F43",
          bottom: 50,
          paddingTop: 70,
          paddingLeft: 10,
          marginLeft: -50,
          marginRight: -30,
          marginHorizontal: 22,
        }}
      >
         {orders.map((order) => (
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: COLORS.white,
            left: 100,
          }}
        >
         {order.orderId}
        </Text>
        ))}
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
        style={{
          marginTop: -30,
          backgroundColor: "#FFFFFF",
          borderRadius: 10,
          alignItems: "center", // Align items vertically in the center
          justifyContent: "space-between", // Add this for space between items
          elevation: 5,
          marginLeft: 20,
          marginRight: 30,
          height:'53%',
        }}
      >
        <Text
          style={{
            fontSize: 20,
            marginTop: 45,
            marginBottom: 10,
            lineHeight: 30,
            color: "#8B7D7D",
            right: 70,
            top: -5,
          }}
        >
          Customer Details{"\n"}
        </Text>
        <Image
              source={require("../assets/bubble-gum-avatar-icon.png")}
              style={{
                width: '13%',
                height: '14%',
                left: -120,
                top: -30,
              }}
              resizeMode="cover"
            />
        <Text
              style={{
                fontSize: 18,
                top: -80,
                left: -10,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Customer Name{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -110,
                left: -30,
                lineHeight: 30,
                color: "#222222"
              }}
            >
              {order.customerName}
            </Text>
            
            <Text
              style={{
                fontSize: 18,
                top: -120,
                left: -42,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Address
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -130,
                left: 40,
                lineHeight: 30,
                color: "#222222"
              }}
            >
               {order.address}{"\n"}
              
            </Text>
            
            <Text
              style={{
                fontSize: 18,
                top: -140,
                left: -40,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Number 
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -150,
                left: 0,
                lineHeight: 30,
                color: "#222222"
              }}
            >
               {order.phoneNumber}{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -180,
                left: -40,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Placed Date 
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -190,
                left: 0,
                lineHeight: 30,
                color: "#222222"
              }}
            >
              {order.placedDate}{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -220,
                left: -40,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Warehouse 
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -230,
                left: 0,
                lineHeight: 30,
                color: "#222222"
              }}
            >
               {order.warehouse}{"\n"}
            </Text>
      </View>
      ))}
      {/* Rectangle 1 */}
      <View style={{ marginTop: 20, elevation: 5, marginLeft: 20, marginRight: 30 }}>
  {orders.map((order) => (
    <View key={order.orderId}>
      {order.products.map((product, index) => (
        <View
          key={index} // Use a unique key for each product in the list
          style={{
            backgroundColor: "#EAEAEA",
            height: 100,
            paddingHorizontal: 20,
            justifyContent: "center",
            marginBottom: 10, // Add margin-bottom for spacing
          }}
        >
          {/* <Image
            source={require("../assets/Carrot.png")}
            style={{
              width: "30%",
              height: "50%",
              left: 0,
              top: 30,
            }}
            resizeMode="cover"
          /> */}
          <Text style={{ color: "#333", fontSize: 16, fontWeight: "bold", left: 100, top: -20 }}>
            {product.productName}
          </Text>
          <Text style={{ color: "#333", fontSize: 16, left: 100, top: -20 }}>
            Category: {product.category}
          </Text>
          <Text style={{ color: "#333", fontSize: 16, fontWeight: "bold", left: 100, top: -10 }}>
            {product.weight} Kg
          </Text>
          <Text style={{ color: "#025F40", fontSize: 16, fontWeight: "bold", left: 220, top: -30 }}>
            Rs. {product.price.toFixed(2)}
          </Text>
        </View>
      ))}
    </View>
  ))}
</View>
      
      
      </ScrollView>
      {/* Curved Rectangle at the Bottom with space */}
      {orders.map((order) => (
      <View
      key={order.orderId}
        style={{
          height: 160,
          width: "100%",
          backgroundColor: "#E0F5CB",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: 20, // Adjust the marginTop for space
        }}
      >
        <Text
              style={{
                fontSize: 18,
                top: 20,
                left: 30,
                lineHeight: 30,
                color: "#035F40"
              }}
            >
              Subtotal{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -30,
                left: 260,
                lineHeight: 30,
                color: "#035F40"
              }}
            >
              Rs.{order.subtotal}{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -40,
                left: 30,
                lineHeight: 30,
                color: "#035F40"
              }}
            >
              Delivery Fee{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -90,
                left: 260,
                lineHeight: 30,
                color: "#035F40"
              }}
            >
            Rs.{order.deliveryFee}{"\n"}
            </Text>
            <View
            style={{
              width: '100%', 
              borderBottomColor: '#989595', 
              borderBottomWidth: 0.5, 
              top:-100,
              marginBottom: 10, 
              }}
              />
               <Text
              style={{
                fontSize: 18,
                top: -100,
                left: 30,
                lineHeight: 30,
                color: "#035F40"
              }}
            >
              Total{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -150,
                left: 260,
                lineHeight: 30,
                color: "#035F40"
              }}
            >
              Rs.{order.total}{"\n"}
            </Text>
        
        
      </View>
      ))}
    </SafeAreaView>
  );
};

export default SpecificOrderDetail;
