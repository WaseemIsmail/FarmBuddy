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
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import { ScrollView } from "react-native";

const AddCrop = ({ navigation }) => {
  const route = useRoute();
  //const id = route.params?.id;

  const [vegetable, setVegetable] = useState("Carrot");
  const [warehouse, setWarehouse] = useState("Homagama");
  const [date, setDate] = useState("");
  const [area, setArea] = useState(1);
  const [gardner, setGardner] = useState("");
  const [stage, setStage] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`http://192.168.8.103:4000/api/crop/`, {
        vegetable,
        warehouse,
        date,
        area,
        gardner,
        stage,
      });
      navigation.navigate("Home");
    } catch (error) {
      console.error("failed:", error);

      if (error.response && error.response.status === 400) {
        console.error(error.response.data.error);
      }
    }
  };

  const incrementArea = () => {
    setArea(area + 1);
  };

  const decrementArea = () => {
    if (area > 1) {
      setArea(area - 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#024F43" }}>
      <View style={{ flex: 1, marginHorizontal: 30, marginVertical: 25 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../assets/left-chevron.png")}
              style={{
                width: 30,
                height: 30,
                marginBottom: 10,
              }}
            />
          </TouchableOpacity>
          <View>
            <Text
              style={{
                marginHorizontal: 20,

                fontSize: 25,
                color: "white",
                bottom: 10,
              }}
            >
              Add New crop
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
          <ScrollView>
            <View
              style={{
                flex: 1,
                marginHorizontal: 45,
                marginVertical: 30,
                bottom: 5,
                backgroundColor: "white",

                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 22,
                  fontWeight: "bold",
                  left: 70,
                  marginVertical: 10,
                }}
              >
                Add a new crop
              </Text>

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
                    selectedValue={vegetable}
                    onValueChange={(itemValue) => {
                      setVegetable(itemValue);
                    }}
                  >
                    <Picker.Item label="Carrot" value="Carrot" />
                    <Picker.Item label="Fresh Lettuce" value="Fresh Lettuce" />
                    <Picker.Item label="Pumpkin" value="Pumpkin" />
                    <Picker.Item label="Onion" value="Onion" />
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
                    selectedValue={warehouse}
                    onValueChange={(itemValue) => {
                      setWarehouse(itemValue);
                    }}
                  >
                    <Picker.Item label="Homagama" value="Homagama" />
                    <Picker.Item label="Kottawa" value="Kottawa" />
                    <Picker.Item label="Maharagama" value="Maharagama" />
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
                  Date
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
                  <TextInput
                    placeholderTextColor={COLORS.black}
                    style={{
                      keyBoardType: "date",
                      marginHorizontal: 10,
                      marginVertical: 10,
                      width: "100%",
                    }}
                    value={date}
                    onChangeText={(text) => setDate(text)}
                  />
                </View>
              </View>
              <View style={styles.quantityContainer}>
                <Text style={styles.quantityLabel}>Area</Text>
                <View style={styles.quantityControl}>
                  <TouchableOpacity
                    onPress={decrementArea}
                    style={styles.controlButton}
                  >
                    <Text style={styles.controlButtonText}>-</Text>
                  </TouchableOpacity>
                  <TextInput
                    style={styles.quantityInput}
                    value={area.toString()}
                    editable={false}
                  />
                  <TouchableOpacity
                    onPress={incrementArea}
                    style={styles.controlButton}
                  >
                    <Text style={styles.controlButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    marginVertical: 8,
                    marginHorizontal: 20,
                  }}
                >
                  Gardner Name
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
                  <TextInput
                    placeholderTextColor={COLORS.black}
                    style={{
                      marginHorizontal: 10,
                      marginVertical: 10,
                      width: "100%",
                    }}
                    value={gardner}
                    onChangeText={(text) => setGardner(text)}
                  />
                </View>
              </View>
              <View style={{ marginBottom: 12 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    marginVertical: 8,
                    marginHorizontal: 20,
                  }}
                >
                  Stage
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
                  <TextInput
                    placeholderTextColor={COLORS.black}
                    style={{
                      marginHorizontal: 10,
                      marginVertical: 10,
                      width: "100%",
                    }}
                    value={stage}
                    onChangeText={(text) => setStage(text)}
                  />
                </View>
              </View>

              <TouchableOpacity
                style={styles.submitButton}
                onPress={handleSubmit}
              >
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
    marginVertical: 10,
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
    marginHorizontal: 120,
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

export default AddCrop;
