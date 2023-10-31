import axios from "axios";
import COLORS from "../constants/colors";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Button,
} from "react-native";
import ApiManager from "../ApiManager";
import { useFocusEffect } from "@react-navigation/native";

const Cart = ({ navigation }) => {
  // const data = [
  //   { name: "Fresh Carrot", price: "900.00" },
  //   { name: "Fresh Carrot", price: "900.00" },
  //   { name: "Fresh Carrot", price: "900.00" },
  //   { name: "Fresh Carrot", price: "900.00" },
  //   { name: "Fresh Carrot", price: "900.00" },
  // ];

  const [cart, setCart] = useState("");

  const handleDelete = async (id) => {
    try {
      const response = await ApiManager(`/api/cart/${id}`, {
        method: "DELETE",
        data: {
          user: "krish",
        },
      });
      if (response.status === 200) {
        fetchAllItems();
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

  const fetchAllItems = async () => {
    try {
      const response = await ApiManager(`/api/cart/all`, {
        method: "POST",
        data: {
          user: "krish",
        },
      });
      if (response.status === 200) {
        setCart(response.data);
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

  useFocusEffect(
    React.useCallback(() => {
      fetchAllItems();
    }, [ApiManager])
  );

  const total = cart?.items?.reduce((acc, item) => acc + item.price, 0);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.dark }}>
      <View
        style={{
          top: 30,
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 28,
            margin: 10,
            textAlign: "center",
          }}
        >
          Cart
        </Text>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
        <View
          style={{
            // backgroundColor: COLORS.lightDark,
            flex: 1,
            margin: 20,
            marginBottom: 10,
          }}
        >
          <ScrollView style={{ flex: 1 }}>
            {cart?.items?.map((item, key) => (
              <View
                style={{
                  backgroundColor: COLORS.cartGreen,
                  height: 100,
                  width: "100%",
                  elevation: 4,
                  borderRadius: 10,
                  flexDirection: "row",
                  marginTop: 10,
                }}
                key={key}
              >
                <View
                  style={{
                    backgroundColor: COLORS.white,
                    height: 85,
                    width: 110,
                    borderRadius: 10,
                    marginLeft: 10,
                    marginTop: 8,
                  }}
                >
                  <Image
                    source={require("../assets/customer/item_carrot.png")}
                    style={{
                      bottom: 6,
                      left: -20,
                      width: 150,
                      height: 80,
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View
                  style={{
                    margin: 10,
                    flexDirection: "column",
                    gap: 5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 500,
                    }}
                  >
                    {item.itemName}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      color: "grey",
                      fontWeight: 500,
                    }}
                  >
                    Category: Root
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                    }}
                  >
                    {/* <TouchableOpacity
                      style={{
                        height: 25,
                        width: 25,
                        backgroundColor: COLORS.dark,
                        borderRadius: 50,
                        marginTop: 10,
                      }}
                      onPress={() => navigation.navigate("StockHome")}
                    >
                      <Text
                        style={{
                          color: COLORS.white,
                          fontSize: 22,
                          fontWeight: "bold",
                          marginLeft: 8,
                          top: -4,
                        }}
                      >
                        -
                      </Text>
                    </TouchableOpacity> */}
                    <Text
                      style={{
                        fontSize: 15,
                        margin: 10,
                      }}
                    >
                      {item.quantity}kg
                    </Text>
                    {/* <TouchableOpacity
                      style={{
                        height: 25,
                        width: 25,
                        backgroundColor: COLORS.dark,
                        borderRadius: 50,
                        marginTop: 10,
                      }}
                      onPress={() => navigation.navigate("StockHome")}
                    >
                      <Text
                        style={{
                          color: COLORS.white,
                          fontSize: 20,
                          fontWeight: "bold",
                          marginLeft: 7,
                          top: -2,
                        }}
                      >
                        +
                      </Text> 
                    </TouchableOpacity>*/}
                  </View>
                </View>
                <View
                  style={{
                    // backgroundColor: COLORS.white,
                    height: "100%",
                    width: 115,
                  }}
                >
                  <View
                    style={{
                      alignItems: "flex-end",
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => handleDelete(item.itemName)}
                    >
                      <MaterialCommunityIcons
                        name="delete"
                        size={20}
                        style={{ margin: 5 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "flex-end",
                      margin: 12,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        color: COLORS.dark,
                        marginLeft: 5,
                        fontWeight: "bold",
                      }}
                    >
                      Rs. {item.price}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        <View
          style={{
            backgroundColor: COLORS.lightGreen,
            width: "100%",
            height: 200,
            elevation: 10,
          }}
        >
          <View
            style={{
              height: 40,
              width: "100%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "50%",
              }}
            >
              <Text
                style={{
                  margin: 10,
                  marginLeft: 40,
                  fontSize: 16,
                  color: COLORS.dark,
                  fontWeight: 500,
                }}
              >
                Subtotal
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "50%",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  margin: 10,
                  marginRight: 50,
                  fontSize: 16,
                  color: COLORS.dark,
                  fontWeight: 800,
                }}
              >
                Rs. {total}.00
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 40,
              width: "100%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "50%",
              }}
            >
              <Text
                style={{
                  margin: 10,
                  marginLeft: 40,
                  fontSize: 16,
                  color: COLORS.dark,
                  fontWeight: 500,
                }}
              >
                Delivery Fee
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "50%",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  margin: 10,
                  marginRight: 50,
                  fontSize: 16,
                  color: COLORS.dark,
                  fontWeight: 800,
                }}
              >
                Rs. 250.00
              </Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <View
            style={{
              height: 45,
              width: "100%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                height: "100%",
                width: "50%",
              }}
            >
              <Text
                style={{
                  margin: 10,
                  marginLeft: 40,
                  fontSize: 16,
                  color: COLORS.dark,
                  fontWeight: 500,
                }}
              >
                Total
              </Text>
            </View>
            <View
              style={{
                height: "100%",
                width: "50%",
              }}
            >
              <Text
                style={{
                  textAlign: "right",
                  margin: 10,
                  marginRight: 50,
                  fontSize: 20,
                  color: COLORS.dark,
                  fontWeight: 900,
                }}
              >
                Rs. {total + 250}.00
              </Text>
            </View>
          </View>
          <Button title="Checkout" color={COLORS.dark} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 0,
    justifyContent: "flex-end",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    left: 10,
  },
});

export default Cart;
