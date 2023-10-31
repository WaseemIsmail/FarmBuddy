import COLORS from "../constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRoute } from '@react-navigation/native';
import axios from "axios"; // Import axios
import  { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

const Ongoing = () => {
const [orders, setOrders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Make an API call to fetch ongoing orders
    axios
      .get(`${process.env.API_URL}api/ongoingOrder`)
      .then((response) => {
        console.log("API Response:", response.data);
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ongoing orders:", error);
      });
  }, []);


    return (
        <SafeAreaView style={{ flex: 1,  backgroundColor: "#F1FEE4" }}>

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
            Ongoing
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
              height: 220,
            //   elevation: 5,
            }}
          >
             
            <Image
              source={require("../assets/bubble-gum-avatar-icon.png")}
              style={{
                width: '15%',
                height: '21%',
                left: -2,
                top: -70,
              }}
              resizeMode="cover"
            />

            <Text
              style={{
                fontSize: 18,
                top: -65,
                left: 10,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Order ID{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -50,
                left: -40,
                lineHeight: 30,
                color: "#222222"
              }}
            >
              {order.orderId}
            </Text>

            <Text
              style={{
                fontSize: 18,
                top: -20,
                left: -125,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Customer Name{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -10,
                left: -240,
                lineHeight: 30,
                color: "#222222"
              }}
            >
              {order.customerName}
            </Text>

            
            <Text
              style={{
                fontSize: 18,
                top: 10,
                left: -340,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Address
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: 45,
                left: -385,
                lineHeight: 30,
                color: "#222222"
              }}
            >
             {order.address} {"\n"}
             
            </Text>
            
            <Text
              style={{
                fontSize: 18,
                top: 58,
                left: -620,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Number 
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: 90,
                left: -665,
                lineHeight: 30,
                color: "#222222"
              }}
            >
              {order.phoneNumber}{"\n"}
            </Text>
            
          </View>
           ))}
        </ScrollView>
      </View>
      
      
      <View
          style={{
            height: 100,
            width: "100%",
            backgroundColor: "#024F43",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            top: 30,
            marginTop: -90, // Adjust the marginTop for space
          }}
        >
        </View>
        <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
               color: COLORS.white,
                top: -35,
                left: 130,
                lineHeight: 30,
              }}
            >
              View Routes 
            </Text>
            <View
  style={{
    height: 80,
    width: 80, // Set width and height to the same value to create a circle
    backgroundColor: "#F1FEE4",
    borderRadius: 40, // Half of the width (or height)
    top: -55,
    marginTop: -90,// Adjust the marginTop for spacing
    left: 150,
  }}
  />

<TouchableOpacity onPress={() => navigation.navigate("Route")}>
<View
  style={{
    height: 70,
    width: 70, // Set width and height to the same value to create a circle
    backgroundColor: "#024F43",
    borderRadius: 40, // Half of the width (or height)
    top: -40,
    marginTop: -90,// Adjust the marginTop for spacing
    left: 155,
  }}
  >
    <Image
        source={require("../assets/3d-fluency-map-marker.png")}
        style={{
        width: '70%',
        height: '70%',
        left: 9,
        top: 10,
        }}
        resizeMode="cover"
        />
  </View>
  
</TouchableOpacity>

  

        
        </SafeAreaView>
        );
};
    
export default Ongoing;
    