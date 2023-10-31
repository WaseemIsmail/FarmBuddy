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
import { useRoute } from "@react-navigation/native";
import ApiManager from "../ApiManager";

const Task = ({ navigation }) => {
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useState("");
  const route = useRoute();
  const id = route.params?.data;

  console.log(data);
  const handleSubmit = () => {};

  useEffect(() => {
    const fetchCrop = async (id) => {
      try {
        const response = await ApiManager(`/api/crop/${id}`, {
          method: "GET",
        });
        if (response.status === 200) {
          setData(response.data);
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
    fetchCrop(id);
  }, []);

  const handleNextTask = async () => {
    try {
      const response = await ApiManager(`/api/crop/${data._id}`, {
        method: "PATCH",
        data: {
          stage: parseInt(data.stage) + 1,
        },
      });
      if (response.status !== 200) {
        console.error(response.data.error);
      }
    } catch (err) {
      console.error("Api Failed:", err);
      if (err.response && err.response.status === 404) {
        console.error(err.response.data.error);
      }
    }
  };

  const handleComplete = async () => {
    try {
      const response = await ApiManager(`/api/item/`, {
        method: "POST",
        data: {
          itemName: data.vegetable,
          quantity: quantity,
          pricePer: price,
          warehouseName: data.warehouse,

          category: data.vegetable,
        },
      });
      if (response.status !== 200) {
        console.error(response.data.error);
      }
    } catch (err) {
      console.error("Api Failed:", err);
      if (err.response && err.response.status === 404) {
        console.error(err.response.data.error);
      }
    }
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#024F43" }}>
      <View style={{ flex: 1, marginHorizontal: 30, marginVertical: 25 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => navigation.navigate("Ongoing")}>
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
              {data.vegetable}
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            marginHorizontal: 0,
            marginVertical: -5,
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
              marginVertical: 60,
              backgroundColor: "white",

              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "black",
                fontSize: 25,
                fontWeight: "bold",
                left: 100,
                marginVertical: 20,
              }}
            >
              Stage 0{data.stage}
            </Text>
            <Text
              style={{
                fontWeight: 500,
                fontSize: 22,
                marginHorizontal: -20,
                left: 70,
                marginVertical: 20,
              }}
            >
              {(() => {
                switch (data.stage) {
                  case 1:
                    return (
                      <>
                        Choose a Location{"\n\n"}
                        Soil Preparation{"\n\n"}
                        Determine the spacing{"\n\n"}
                      </>
                    );
                  case 2:
                    return (
                      <>
                        Seed Selection{"\n\n"}
                        Planting Time{"\n\n"}
                        Planting Seeds{"\n\n"}
                        Cover the seeds{"\n\n"}
                        Water supply
                      </>
                    );
                  case 3:
                    return (
                      <>
                        Thinning{"\n\n"}
                        Fertilize{"\n\n"}
                        Watering{"\n\n"}
                      </>
                    );
                  case 4:
                    return (
                      <>
                        Vine Training{"\n\n"}
                        Pollination{"\n\n"}
                        Mulch{"\n\n"}
                        Pest and Disease Control{"\n\n"}
                        Water supply
                      </>
                    );
                  case 5:
                    return (
                      <>
                        Harvest Time{"\n\n"}
                        Harvest Care{"\n\n"}
                      </>
                    );
                  default:
                    return null; // Default case, can be an empty fragment or a message
                }
              })()}
            </Text>

            {(() => {
              if (data.stage == 5) {
                return (
                  <View>
                    <Text
                      style={{
                        marginHorizontal: 40,
                        fontSize: 16,
                        fontWeight: 700,
                        marginVertical: 30,
                      }}
                    >
                      Quantity
                    </Text>
                    <View
                      style={{
                        marginHorizontal: 40,
                        marginVertical: -10,
                        borderColor: COLORS.black,
                        backgroundColor: "#D4EBDD",
                        height: 45,
                        width: 100,
                        borderRadius: 8,
                      }}
                    >
                      <TextInput
                        placeholderTextColor={COLORS.black}
                        keyboardType="numeric"
                        style={{
                          marginHorizontal: 20,
                          marginVertical: 10,
                          width: "50%",
                        }}
                        value={quantity}
                        onChangeText={(text) => setQuantity(text)}
                      />
                    </View>
                    <Text
                      style={{
                        marginHorizontal: 60,
                        fontSize: 16,
                        fontWeight: 700,
                        marginVertical: 30,
                        top: -106,
                        left: 120,
                      }}
                    >
                      Price
                    </Text>
                    <View
                      style={{
                        marginHorizontal: 60,
                        marginVertical: -10,
                        borderColor: COLORS.black,
                        backgroundColor: "#D4EBDD",
                        height: 45,
                        width: 100,
                        borderRadius: 8,
                        top: -106,
                        left: 120,
                      }}
                    >
                      <TextInput
                        placeholderTextColor={COLORS.black}
                        keyboardType="numeric"
                        style={{
                          marginHorizontal: 20,
                          marginVertical: 10,
                          width: "50%",
                        }}
                        value={price}
                        onChangeText={(text) => setPrice(text)}
                      />
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: "#024F43",
                        width: 100,
                        alignItems: "center",
                        borderRadius: 10,
                        marginVertical: -30,
                        padding: 8,
                        marginHorizontal: 100,
                        right: 0,
                      }}
                      onPress={handleComplete}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        Complete
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              } else {
                return (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#024F43",
                      width: 100,
                      alignItems: "center",
                      borderRadius: 10,
                      padding: 8,
                      marginHorizontal: 100,
                      left: 0,
                      marginVertical: 86,
                    }}
                    onPress={handleNextTask}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 16,
                        fontWeight: "bold",
                      }}
                    >
                      Next Task
                    </Text>
                  </TouchableOpacity>
                );
              }
            })()}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Task;
