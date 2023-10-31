import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from "react-native";
import COLORS from "../constants/colors";
import { Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AddDamge = ({ navigation }) => {
  const handleSubmit = () => {};

  const [quantity, setQuantity] = useState(1); // Initial quantity

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#024F43" }}>
      <View style={{ flex: 1, marginHorizontal: 30, marginVertical: 25 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ViewDetails")}
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
              right: 90,
              top: 15,
            }}
          >
            <Image
              source={require("../assets/icons8-arrow-50.png")}
              style={{
                width: 30,
                height: 30,
                marginLeft: -40,
                top: -25,
                color: "white",
                right: -10,
                transform: [{ rotate: "180deg" }],
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                marginHorizontal: 20,
                fontSize: 25,
                color: "white",
                bottom: 13,
                right: 100,
              }}
            >
              Add Damage Item
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            marginHorizontal: 0,
            marginVertical: -15,
            backgroundColor: "#E1F7CC",
            bottom: -30,
            right: 30,
            height: "100%",
            width: "120%",
          }}
        >
          <View
            style={{
              flex: 1,
              marginHorizontal: 45,
              marginVertical: 35,
              bottom: 7,
              backgroundColor: "white",

              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 22,
                fontWeight: "bold",
                left: 50,
                marginVertical: 10,
              }}
            >
              Add a Damage Item
            </Text>
            <Image
              source={require("../assets/vegitable.png")}
              style={{
                width: 98,
                height: 200,
                top: 25,
                right: -110,
                color: "white",
              }}
              resizeMode="cover"
            />
            <View style={{ top: 70 }}>
              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    marginHorizontal: 20,
                    fontSize: 16,
                    fontWeight: 600,
                    marginVertical: 8,
                  }}
                >
                  Select Vegetable
                </Text>
                <View
                  style={{
                    marginHorizontal: 20,
                    borderColor: COLORS.black,
                    backgroundColor: "#D4EBDD",
                    height: 45,
                    borderRadius: 8,
                  }}
                >
                  <Picker
                    style={{
                      marginVertical: -5,
                      borderWidth: 2,
                      borderColor: COLORS.black,
                      borderRadius: 5,
                    }}
                  >
                    <Picker.Item label="Carrot" value="Carrot" />
                    <Picker.Item label="Fresh Lettuce" value="Fresh Lettuce" />
                    <Picker.Item label="Pumpkin" value="Pumpkin" />
                    <Picker.Item label="Onion" value="FOnion" />
                    <Picker.Item label="Potato" value="Potato" />
                  </Picker>
                </View>
              </View>

              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    marginHorizontal: 20,
                    fontSize: 16,
                    fontWeight: 600,
                    marginVertical: 8,
                  }}
                >
                  Select Warehouse
                </Text>
                <View
                  style={{
                    marginHorizontal: 20,
                    borderColor: COLORS.black,

                    backgroundColor: "#D4EBDD",

                    height: 45,
                    borderRadius: 8,
                  }}
                >
                  <Picker
                    style={{
                      marginVertical: -5,
                      borderWidth: 2,
                      borderColor: COLORS.black,
                      borderRadius: 5,
                    }}
                  >
                    <Picker.Item label="Homagama" value="Homagama" />
                    <Picker.Item label="Kottawa" value="Kottawa" />
                    <Picker.Item label="Maharagama" value="Maharagama" />
                  </Picker>
                </View>
              </View>

              <View style={styles.quantityContainer}>
                <Text style={styles.quantityLabel}>Quantity</Text>
                <View style={styles.quantityControl}>
                  <TouchableOpacity
                    onPress={decrementQuantity}
                    style={styles.controlButton}
                  >
                    <Text style={styles.controlButtonText}>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={styles.quantityInput}
                    value={quantity.toString()}
                    editable={false}
                  />
                  <TouchableOpacity
                    onPress={incrementQuantity}
                    style={styles.controlButton}
                  >
                    <Text style={styles.controlButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  submitButton: {
    backgroundColor: "#024F43",
    width: 100,
    alignItems: "center",
    borderRadius: 8,
    padding: 10,
    marginHorizontal: 100,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  quantityLabel: {
    marginHorizontal: 20,
    fontSize: 16,
    fontWeight: "600",
    marginRight: 10,
  },
  quantityControl: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 100,
  },
  controlButton: {
    backgroundColor: "#024F43",
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  controlButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  quantityInput: {
    width: 40,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default AddDamge;
