
import axios from "axios";
import COLORS from "../constants/colors";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Button,Image, Touchable, TouchableOpacity, } from "react-native";

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.Lightgreen }}>
      <View
        style={{
          height: '50%', // Set the height to 40% of the screen
          backgroundColor: COLORS.Darkgreen,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          borderBottomLeftRadius: 10, // Adjust this value as needed for the desired oval shape
          borderBottomRightRadius: 10, // Adjust this value as needed for the desired oval shape
        }}
      >
        <Image
        style={{
          position: 'absolute',
          top: 110, // Adjust the position of the image as needed
          left: 260, // Adjust the position of the image as needed
          width: '30%', // Adjust the width to zoom the image
          height: '40%', // Adjust the height to zoom the image
           // Set the opacity to make the image transparent (0.5 is 50% opacity)
        }}
        source={require("../assets/3d-casual-life-delivery-boy-on-scooter-1.png")}
        >
          
        </Image>
      </View>

      <View
        style={{
          alignItems: 'center', // Center the content vertically
          marginHorizontal: 22,
          top: 100,
          paddingLeft: 10,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 8, color: 'white' }}>
        What do you {"\n"}
        want to deliver {"\n"}
        today ?
        </Text>

        
        <Image
          style={{
            height: 50,
            width: 50,
            top: -140,
            borderRadius: 5,
            marginTop: 10,
            right: 290,
          }}
         source={require("../assets/bubble-gum-avatar-icon.png")}
        />
      </View>
      
      <TouchableOpacity onPress={() =>navigation.navigate("AllOrders")}>
      <View
        style={{
          margin: 20,
          top: 80,
          paddingTop: 40,
          paddingLeft: 5,
          borderRadius: 40,
          width: '90%', // Adjust the width to zoom the image
          height: '40%', // Adjust the height to zoom the image
          backgroundColor: COLORS.Mediumgreen, // Change the background color to gray
          alignItems: 'center', // Center the content horizontally
          shadowColor: 'black', // Shadow color
          shadowOffset: { width: 0, height: 4 }, // Shadow offset
          shadowOpacity: 0.5, // Shadow opacity
          elevation: 5, // Android shadow elevation
        }}
      >
        
       
         <Text style={{ fontSize: 18,right:70,top:-20, marginVertical: 20, fontWeight: 'normal',color: '#7B6F6F' }}>
            Today new Orders
        </Text>
        <Text style={{ fontSize: 25, right:50,top:-40 }}>
        Claim Order Now 
        </Text>
        <View
        style={{
          margin: 20,
          top: -130,
          left:100,
          borderRadius: 40,
          width: 80, 
          height: 80, 
          backgroundColor: '#F5EBEB',
          shadowColor: 'black', 
          elevation: 5, 
        }}
      />
      <View
      style={{
        margin: 20,
          top: -240,
          left:100,
          borderRadius: 40,
          width: 60, 
          height: 60, 
          backgroundColor: '#F5EBEB',
          shadowColor: 'black', 
          elevation: 5, 
      }}
      >
         <Text style={{ fontSize: 25, right:-15,top:10 }}>
        05
        </Text>
      </View>
      </View>
      </TouchableOpacity>

<View style={[styles.container, styles.moveUp, styles.containerMove]}>
  {/* First Box */}
  <TouchableOpacity onPress={() =>navigation.navigate("DeliveredPage")}>
  <View style={styles.box}>
    <Image
      style={{
        position: 'absolute',
        top: 20, // Adjust the position of the image as needed
        left: 50, // Adjust the position of the image as needed
        width: '30%', // Adjust the width to zoom the image
        height: '30%', // Adjust the height to zoom the image
       
      }}
      source={require("../assets/3d-casual-life-e-commerce-completed-order.png")}
    />
    <Text style={{ fontSize: 15, left:40,top:60, color: 'white' }}>
        Delivered
        </Text>
   <Text style={{ fontSize: 30, left:50,top:60, color: 'white' }}>
        15
   </Text>
  </View>
  </TouchableOpacity>

  {/* Additional Boxes */}
  <TouchableOpacity onPress={() =>navigation.navigate("Ongoing")}>
  <View style={styles.box}> 
    <Image
      style={{
        position: 'absolute',
        top: 20, // Adjust the position of the image as needed
        left: 15, // Adjust the position of the image as needed
        width: '40%', // Adjust the width to zoom the image
        height: '30%', // Adjust the height to zoom the image
       
      }}
      source={require("../assets/3d-casual-life-delivery-package-boxes.png")}
    />
    <Image
      style={{
        position: 'absolute',
        top: 13, // Adjust the position of the image as needed
        left: 29, // Adjust the position of the image as needed
        width: '18%', // Adjust the width to zoom the image
        height: '15%', // Adjust the height to zoom the image
       
      }}
      source={require("../assets/business-3d-red-clock.png")}
    />
    <Image
      style={{
        position: 'absolute',
        top: 20, // Adjust the position of the image as needed
        left: 45, // Adjust the position of the image as needed
        width: '60%', // Adjust the width to zoom the image
        height: '30%', // Adjust the height to zoom the image
       
      }}
      source={require("../assets/3d-casual-life-delivery-truck-yellow.png")}
    />
    <Text style={{ fontSize: 15, left:40,top:60, color: 'white' }}>
        Ongoing
        </Text>
   <Text style={{ fontSize: 30, left:50,top:60, color: 'white' }}>
        04
   </Text>
  </View>
  </TouchableOpacity>

  <TouchableOpacity onPress={() =>navigation.navigate("CancelDelivery")}>
  <View style={[styles.box, styles.leftBox]} >
  <Image
      style={{
        position: 'absolute',
        top: 20, // Adjust the position of the image as needed
        left: 40, // Adjust the position of the image as needed
        width: '45%', // Adjust the width to zoom the image
        height: '30%', // Adjust the height to zoom the image
       
      }}
      source={require("../assets/3d-casual-life-online-shopping-and-delivery-package-boxes.png")}
    />
    <Image
      style={{
        position: 'absolute',
        top: 10, // Adjust the position of the image as needed
        left: 10, // Adjust the position of the image as needed
        width: '30%', // Adjust the width to zoom the image
        height: '30%', // Adjust the height to zoom the image
       
      }}
      source={require("../assets/business-3d-red-cancel-icon.png")}
    />
    <Text style={{ fontSize: 15, left:18,top:60, color: 'white' }}>
        Cancel Delivery
        </Text>
   <Text style={{ fontSize: 30, left:50,top:60, color: 'white' }}>
        03
   </Text>
  </View>
  </TouchableOpacity>
</View>


      {/* <View
        style={{
          alignItems: 'center',
          margin: 20,
        }}
      >
        
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: -150,
  },
  box: {
    width: 135,
    height: 135,
    margin: 10,
    borderRadius: 30,
    backgroundColor: COLORS.Darkgreen, 
    shadowColor: 'black',
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
  containerMove:{
    left: 40,
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column",
//     justifyContent: "flex-end",
//   },
// });

export default Home;
