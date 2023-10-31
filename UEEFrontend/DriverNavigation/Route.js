
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  PermissionsAndroid,
  Button,
} from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { GOOGLE_API_KEY } from "../environments";
import Constants from "expo-constants";
import { useRef, useState,useEffect } from "react";
import MapViewDirections from "react-native-maps-directions";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import { useNavigation } from '@react-navigation/native';
import axios from "axios"; // Import axios

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
  latitude: 0.0922,
  longitude: 0.0421,
  latitudeDelta: LATITUDE_DELTA,
  longitudeDelta: LONGITUDE_DELTA,
};

function InputAutocomplete({
  label,
  placeholder,
  onPlaceSelected,
}) {
  return (
    <>

      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: GOOGLE_API_KEY,
          language: "en",
        }}
      />
    </>
  );
}

export default function Route() {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);
  const mapRef = useRef(null);

  const [orders, setOrders] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    // Make an API call to fetch ongoing orders
    axios
      .get(`${process.env.API_URL}api/ongoingOrder`)
      .then((response) => {
        console.log("API Response:", response.data);
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching ongoing orders:", error);
      });
  }, []);


  const moveTo = async (position) => {
    const camera = await mapRef.current?.getCamera();
    if (camera) {
      camera.center = position;
      mapRef.current?.animateCamera(camera, { duration: 1000 });
    }
  };

  const edgePaddingValue = 70;

  const edgePadding = {
    top: edgePaddingValue,
    right: edgePaddingValue,
    bottom: edgePaddingValue,
    left: edgePaddingValue,
  };

  const traceRouteOnReady = (args) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const traceRoute = () => {
    if (origin && destination) {
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin, destination], { edgePadding });
    }
  };

  const onPlaceSelected = (details, flag) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View
        style={{
          height: "17%",
          backgroundColor: "#024F43",
          bottom: 30,
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
          Route
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
      <View>
        
      </View>
      <MapView
  ref={mapRef}
  style={styles.map}
  provider={PROVIDER_GOOGLE}
  initialRegion={INITIAL_POSITION}
  showsUserLocation={true} // Add this line
>
  {origin && <Marker coordinate={origin} />}
  {destination && <Marker coordinate={destination} />}
  {showDirections && origin && destination && (
    <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={GOOGLE_API_KEY}
      strokeColor="#6644ff"
      strokeWidth={4}
      onReady={traceRouteOnReady}
    />
  )}
  
</MapView>

     
      <View style={styles.searchContainer}>
        {/* <InputAutocomplete
          label="Origin"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "origin");
          }}
        /> */}
        <InputAutocomplete
          label="Destination"
          onPlaceSelected={(details) => {
            onPlaceSelected(details, "destination");
          }}
        />
        <TouchableOpacity style={styles.button} onPress={traceRoute}>
          <Text style={styles.buttonText}>Trace route</Text>
        </TouchableOpacity>
        {distance && duration ? (
          <View>
            <Text>Distance: {distance.toFixed(2)}</Text>
            <Text>Duration: {Math.ceil(duration)} min</Text>
          </View>
        ) : null}
      </View>

      <ScrollView style={{ marginTop: -10 }}>
      {orders.map((order) => (
          <View
            style={{
              backgroundColor: "#FFFEFD",
              paddingHorizontal: 20,
              borderRadius: 10,
              marginBottom: 20, // Add margin to create a gap
              flexDirection: "row", // Align items horizontally
              alignItems: "center", // Align items vertically in the center
              justifyContent: "space-between", // Add this for space between items
          
              height: 100,
              elevation: 5,
              left:20
            }}
          >
            <Text
              style={{
                fontSize: 18,
                top: -20,
                left: 15,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Customer Name{"\n"}
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: -10,
                left: -105,
                lineHeight: 30,
                color: "#222222"
              }}
            >
              {order.customerName}
            </Text>
            
            <Text
              style={{
                fontSize: 18,
                top: 10,
                left: -200,
                lineHeight: 30,
                color: "#989595"
              }}
            >
              Address
            </Text>
            <Text
              style={{
                fontSize: 18,
                top: 40,
                left: -250,
                lineHeight: 30,
                color: "#222222"
              }}
            >
             {order.address}{"\n"}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("OrderCancelDelivered",{ orderId: order._id })}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                left: 120,
                borderColor: 'transparent', // Make the border transparent
                marginRight: -90,
                borderRadius: 10,
      }}
    >
      <Image
        source={require('../assets/MicrosoftTeams-image.png')}
        style={{
          width: 30,
          height: 30,
          marginLeft: -40,
          left: -300,
          transform: [{ rotate: '90deg' }],
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
          </View>
 ))}
        </ScrollView>
      
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    top: -30,
    width: '100%',
    
    height: '60%',
    
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    top: 130,
    left: 20,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    opacity: 1,
    // top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#bbb",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
  },
});