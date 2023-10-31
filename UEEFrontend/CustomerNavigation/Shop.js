import axios from "axios";
import COLORS from "../constants/colors";
import React, { useState, useRef, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ApiManager from "../ApiManager";
import { useFocusEffect } from "@react-navigation/native";

const Shop = ({ navigation }) => {
  const [data, setData] = useState("");

  const fetchAllItems = async () => {
    try {
      const response = await ApiManager(`/api/item/`, {
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

  useFocusEffect(
    React.useCallback(() => {
      fetchAllItems();
    }, [ApiManager])
  );

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ProductPage", { id: item._id })}
      >
        <View
          style={{
            margin: 10,
            height: 180,
            width: 170,
            backgroundColor: COLORS.white,
            borderRadius: 10,
            elevation: 8,
          }}
        >
          <Image
            source={require("../assets/customer/item_carrot.png")}
            style={{
              left: -25,
              width: 220,
              height: 110,
            }}
            resizeMode="contain"
          />
          <View
            style={{
              left: 10,
              top: 5,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
              }}
            >
              {item.itemName}
            </Text>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: COLORS.dark,
                top: 5,
              }}
            >
              Rs. {item.pricePer}/kg
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.dark }}>
      <View
        style={{
          height: 300,
          width: "100%",
          backgroundColor: COLORS.lightGreen,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          top: 60,
          flex: 1,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 22,
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          Categories
        </Text>

        <View
          style={{
            flexDirection: "row",
            height: 100,
          }}
        >
          <TouchableOpacity
            style={{
              height: 50,
              width: 160,
              backgroundColor: "#C4E4A6",
              borderRadius: 50,
              marginTop: 50,
              marginRight: 10,
              bottom: 40,
              left: 10,
            }}
            onPress={() => navigation.navigate("StockHome")}
          >
            <Image
              source={require("../assets/customer/healthy.png")}
              style={{
                left: 10,
                width: 30,
                height: 30,
                top: 10,
              }}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 15,
                left: 50,
                fontWeight: "500",
                top: -16,
              }}
            >
              Leafy Green
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 120,
              backgroundColor: "#C4E4A6",
              borderRadius: 50,
              marginTop: 50,
              marginRight: 10,
              bottom: 40,
              left: 10,
            }}
            onPress={() => navigation.navigate("StockHome")}
          >
            <Image
              source={require("../assets/customer/onion.png")}
              style={{
                left: 10,
                width: 30,
                height: 30,
                top: 10,
              }}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 15,
                left: 50,
                fontWeight: "500",
                top: -16,
              }}
            >
              Allium
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: 160,
              backgroundColor: "#C4E4A6",
              borderRadius: 50,
              marginTop: 50,
              bottom: 40,
              left: 10,
            }}
            onPress={() => navigation.navigate("StockHome")}
          >
            <Image
              source={require("../assets/customer/potato.png")}
              style={{
                left: 10,
                width: 30,
                height: 30,
                top: 10,
              }}
              resizeMode="cover"
            />
            <Text
              style={{
                fontSize: 15,
                left: 50,
                fontWeight: "500",
                top: -16,
              }}
            >
              Root
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            top: -20,
            flex: 1,
          }}
        >
          <View
            style={{
              margin: 5,
              flexDirection: "column",
            }}
          >
            <FlatList data={data} renderItem={this.renderItem} numColumns={2} />
          </View>
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

export default Shop;
