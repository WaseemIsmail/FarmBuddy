import {  ScrollView, Image, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";

const AcceptOrder = ({navigation}) => {
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
        <Text
          style={{
            fontSize: 22,
            fontWeight: "bold",
            color: COLORS.white,
            left: 100,
          }}
        >
          #5564748
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
         
        <View
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            top: -230,
            marginTop: 180, // Adjust the marginTop for space
          }}
        >
            <Image
          source={require('../assets/3d-fluency-ok.png')}
        style={{
          width: '50%',
          height: '30%',
          marginLeft: -40,
          left: 130,
          top: 50,
          color: COLORS.white,
        }}
        resizeMode="cover"
      />
      <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            color: 'black',
            left: 100,
            top:40,
          }}
        >
          Thank You
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            left: 80,
            top:60,
          }}
        >
          Your Delivery Is Successful 
        </Text>
          <TouchableOpacity  onPress={() =>navigation.navigate("Ongoing")}
            style={{
              height: 40,
              width: 280,
              backgroundColor: "#024F43",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              top:280,
              left: 60,
            }}
          >
            <Text style={{ color: COLORS.white, fontSize: 16 }}>
            Drive to your next delivery
            </Text>
          </TouchableOpacity>
        </View>
        
      
      
    </SafeAreaView>
  );
};

export default AcceptOrder;
