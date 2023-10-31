import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";

const OrderPage = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F1FEE4" }}>
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
            height: "53%",
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
              width: "13%",
              height: "14%",
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
              color: "#989595",
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
              color: "#222222",
            }}
          >
            Nimal
          </Text>

          <Text
            style={{
              fontSize: 18,
              top: -120,
              left: -42,
              lineHeight: 30,
              color: "#989595",
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
              color: "#222222",
            }}
          >
            No 20,Ramakrishna Rd{"\n"}
            Wallwatte
          </Text>

          <Text
            style={{
              fontSize: 18,
              top: -140,
              left: -40,
              lineHeight: 30,
              color: "#989595",
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
              color: "#222222",
            }}
          >
            077-6577560{"\n"}
          </Text>
          <Text
            style={{
              fontSize: 18,
              top: -180,
              left: -40,
              lineHeight: 30,
              color: "#989595",
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
              color: "#222222",
            }}
          >
            10/19/2023{"\n"}
          </Text>
          <Text
            style={{
              fontSize: 18,
              top: -220,
              left: -40,
              lineHeight: 30,
              color: "#989595",
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
              color: "#222222",
            }}
          >
            Homagama{"\n"}
          </Text>
        </View>
        {/* Rectangle 1 */}
        <View
          style={{
            marginTop: 20,
            backgroundColor: "#EAEAEA",
            height: 100,
            paddingHorizontal: 20,
            justifyContent: "center",
            elevation: 5,
            marginLeft: 20,
            marginRight: 30,
          }}
        >
          <Image
            source={require("../assets/Carrot.png")}
            style={{
              width: "30%",
              height: "50%",
              left: 0,
              top: 30,
            }}
            resizeMode="cover"
          />
          <Text
            style={{
              color: "#333",
              fontSize: 16,
              fontWeight: "bold",
              left: 100,
              top: -20,
            }}
          >
            Fresh Carrot
          </Text>
          <Text style={{ color: "#333", fontSize: 16, left: 100, top: -20 }}>
            Category : root
          </Text>
          <Text
            style={{
              color: "#333",
              fontSize: 16,
              fontWeight: "bold",
              left: 100,
              top: -10,
            }}
          >
            2 Kg
          </Text>
          <Text
            style={{
              color: "#333",
              fontSize: 16,
              fontWeight: "bold",
              left: 220,
              top: -30,
              color: "#025F40",
            }}
          >
            Rs.900.00
          </Text>
        </View>
      </ScrollView>
      {/* Curved Rectangle at the Bottom with space */}
      <View
        style={{
          height: 240,
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
            color: "#035F40",
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
            color: "#035F40",
          }}
        >
          Rs. 1900.00{"\n"}
        </Text>
        <Text
          style={{
            fontSize: 18,
            top: -40,
            left: 30,
            lineHeight: 30,
            color: "#035F40",
          }}
        >
          Delivery Fee{"\n"}
        </Text>
        <Text
          style={{
            fontSize: 18,
            top: -90,
            left: 270,
            lineHeight: 30,
            color: "#035F40",
          }}
        >
          Rs. 190.00{"\n"}
        </Text>
        <View
          style={{
            width: "100%",
            borderBottomColor: "#989595",
            borderBottomWidth: 0.5,
            top: -100,
            marginBottom: 10,
          }}
        />
        <Text
          style={{
            fontSize: 18,
            top: -100,
            left: 30,
            lineHeight: 30,
            color: "#035F40",
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
            color: "#035F40",
          }}
        >
          Rs. 1900.00{"\n"}
        </Text>
        <View
          style={{
            height: 300,
            width: "100%",
            backgroundColor: "white",
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            top: -330,
            marginTop: 180, // Adjust the marginTop for space
          }}
        >
          <TouchableOpacity
            // onPress={() => navigation.navigate("AllOrders")}
            style={{
              height: 40,
              width: 280,
              backgroundColor: "#024F43",
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,

              left: 60,
            }}
          >
            <Text style={{ color: COLORS.white, fontSize: 16 }}>
              Deliver and Confirm
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderPage;
