import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Welcome,
  CustomerHome,
  CultivationHome,
  InventoryHome,
  DriverHome,
  OrderPage,
  StockHome,
  WareHouses,
  ViewDetails,
  AddDamge,
  UpdateItem,
  DeliveredPage,
  CancelDelivery,
  AcceptOrder,
  Ongoing,
  Route,
  OrderCancelDelivered,
  cancelDetail,
  Thankyou,
  AddCrop,
  Task,
} from "./screens";

import Login from "./screens/Login";
import Signup from "./screens/Signup";

import ProductPage from "./pages/ProductPage";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./components/Routes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CustomerHome"
          component={CustomerHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CultivationHome"
          component={CultivationHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InventoryHome"
          component={InventoryHome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DriverHome"
          component={DriverHome}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="OrderPage"
          component={OrderPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddCrop"
          component={AddCrop}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="DeliveredPage"
          component={DeliveredPage}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CancelDelivery"
          component={CancelDelivery}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AcceptOrder"
          component={AcceptOrder}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Ongoing"
          component={Ongoing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Route"
          component={Route}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="OrderCancelDelivered"
          component={OrderCancelDelivered}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="cancelDetail"
          component={cancelDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Thankyou"
          component={Thankyou}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="StockHome"
          component={StockHome}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="WareHouses"
          component={WareHouses}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="ViewDetails"
          component={ViewDetails}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AddDamge"
          component={AddDamge}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="UpdateItem"
          component={UpdateItem}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Task"
          component={Task}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ProductPage"
          component={ProductPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
