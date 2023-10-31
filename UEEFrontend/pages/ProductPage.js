import axios from "axios";
import COLORS from "../constants/colors";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Button from "../components/Button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import SelectDropdown from "react-native-select-dropdown";
import ApiManager from "../ApiManager";

const ProductPage = ({ navigation }) => {
  const route = useRoute();
  const id = route.params?.id;

  const [data, setData] = useState("");
  const [cart, setCart] = useState({ quantity: 1, warehouseName: "" });

  useEffect(() => {
    const fetchAllItems = async (id) => {
      try {
        const response = await ApiManager(`/api/item/${id}`, {
          method: "GET",
          data: {},
        });
        if (response.status === 200) {
          setData(response.data);
          setCart((s) => ({
            ...s,
            itemName: response.data.itemName,
            price: response.data.pricePer,
          }));
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
    fetchAllItems(id);
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const response = await ApiManager(`/api/cart/`, {
        method: "POST",
        data: {
          user: "krish",
          items: cart,
        },
      });
      if (response.status === 200) {
        navigation.navigate("CustomerHome");
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
  const warehouses = ["Homagama", "Malabe", "Kottawa", "Maharagama"];

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
        <Image
          source={require("../assets/customer/item_carrot.png")}
          style={{
            width: 500,
            height: 200,
            left: -50,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            backgroundColor: COLORS.lightDark,
            height: 100,
            width: "100%",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              margin: 20,
              marginLeft: 30,
              flexDirection: "column",
              gap: 5,
            }}
          >
            <Text
              style={{
                fontSize: 22,
                fontWeight: 800,
              }}
            >
              {data.itemName}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "grey",
                fontWeight: 800,
              }}
            >
              Category: Root
            </Text>
          </View>
          <View
            style={{
              height: 100,
              width: "50%",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontWeight: 800,
                fontSize: 20,
                color: COLORS.dark,
                top: 35,
              }}
            >
              {data.pricePer}/kg
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
            height: 250,
            width: "100%",
          }}
        >
          <View
            style={{
              width: "100%",
              height: 60,
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              style={{
                height: 35,
                width: 35,
                backgroundColor: COLORS.dark,
                borderRadius: 50,
                marginTop: 10,
              }}
              onPress={() => {
                setCart((s) => {
                  if (s.quantity > 1) {
                    return {
                      ...s,
                      quantity: s.quantity - 1,
                      price: data.pricePer * (s.quantity - 1),
                    };
                  } else {
                    return s;
                  }
                });
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 25,
                  fontWeight: "bold",
                  marginLeft: 12,
                }}
              >
                -
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 500,
                margin: 12,
              }}
            >
              {cart?.quantity ? cart.quantity : 1}kg
            </Text>
            <TouchableOpacity
              style={{
                height: 35,
                width: 35,
                backgroundColor: COLORS.dark,
                borderRadius: 50,
                marginTop: 10,
              }}
              onPress={() => {
                setCart((s) => ({
                  ...s,
                  quantity: cart?.quantity + 1,
                  price: data.pricePer * (s.quantity + 1),
                }));
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  fontSize: 21,
                  fontWeight: "bold",
                  marginLeft: 11,
                  top: 2,
                }}
              >
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 100,
              width: "100%",
              top: -10,
              left: 30,
              justifyContent: "center",
              zIndex: 10,
            }}
          >
            <SelectDropdown
              data={warehouses}
              onSelect={(item) => {
                setCart((s) => ({
                  ...s,
                  warehouseName: item,
                }));
              }}
              defaultButtonText={"Select warehouse"}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdown1BtnStyle}
              buttonTextStyle={styles.dropdown1BtnTxtStyle}
              dropdownIconPosition={"right"}
              dropdownStyle={styles.dropdown1DropdownStyle}
              rowStyle={styles.dropdown1RowStyle}
              rowTextStyle={styles.dropdown1RowTxtStyle}
            />
          </View>
          <View
            style={{
              height: 100,
              width: "100%",
              gap: 10,
              top: 10,
              justifyContent: "center",
              zIndex: 1,
            }}
          >
            <Button
              title={"Add to Cart"}
              style={{
                width: "60%",
                left: 70,
              }}
              onPress={handleAddToCart}
            ></Button>
            <Button
              title={"Buy Now"}
              style={{
                width: "60%",
                left: 70,
              }}
              filled
            ></Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  header: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
  },
  headerTitle: { color: "#000", fontWeight: "bold", fontSize: 16 },
  saveAreaViewContainer: { flex: 1, backgroundColor: "#FFF" },
  viewContainer: { flex: 1, backgroundColor: "#FFF" },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: "10%",
    paddingBottom: "20%",
  },

  dropdown1BtnStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
});

export default ProductPage;
