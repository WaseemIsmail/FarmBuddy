import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import COLORS from "../constants/colors";
import { Image } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import ApiManager from "../ApiManager";

const Ongoing = ({ navigation }) => {
  const route = useRoute();
  const id = route.params?.id;
  const [crops, setCrops] = useState([]);

  const getAllCrops = async () => {
    try {
      const response = await ApiManager(`/api/crop/`, {
        method: "GET",
      });
      if (response.status === 200) {
        setCrops(response.data);
      } else {
        console.error(response.data.error);
      }
    } catch (err) {
      console.error("Api Failed:", err);
      if (err.response) {
        console.error(err.response.data.error);
      }
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      getAllCrops();
    }, [ApiManager])
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <View
          style={{
            height: "20%",
            backgroundColor: "#024F43",
            bottom: 60,
            paddingTop: 70,
            paddingLeft: 10,
            marginLeft: -50,
            marginRight: -30,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Image
              source={require("../assets/left-chevron.png")}
              style={{ width: 30, height: 30, marginBottom: 10, left: 30 }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 25,
              marginHorizontal: 40,
              color: COLORS.white,
              bottom: 40,
              left: 40,
            }}
          >
            Ongoing Cultivation
          </Text>
        </View>

        <ScrollView style={{ marginTop: -30 }}>
          {crops.map((crop) => (
            <View
              style={{
                backgroundColor: "#E1F7CC",
                paddingHorizontal: 20,
                height: 120,
                borderRadius: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <Image
                source={require("../assets/carrots.png")}
                style={{
                  width: 100,
                  marginHorizontal: 10,

                  height: 80,

                  marginLeft: -10,
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  fontSize: 20,
                  marginHorizontal: 10,
                  fontWeight: "bold",
                  marginTop: 10,
                  marginBottom: 10,
                  lineHeight: 30,
                }}
              >
                {crop.vegetable}
                {"\n"}
                Stage : {crop.stage}
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate("Task", { data: crop._id })}
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                  height: 52,
                  borderColor: COLORS.grey,
                  marginRight: 4,
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../assets/left-chevron.png")}
                  style={{
                    width: 40,

                    height: 40,

                    marginLeft: -40,

                    left: 30,

                    transform: [{ rotate: "180deg" }], // Rotate the arrow image
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default Ongoing;
