import React from "react";
import { View,StyleSheet,SafeAreaView,StatusBar } from "react-native";
import Homes from "./componemt/ScreenHome/Homes";
import TinTuc from "./componemt/ScreenTinTuc/TinTuc.js";
import ThongBaos from "./componemt/ScreenThongBao/ThongBao.js";
import TaiKhoans from "./componemt/ScreenTaiKhoan/TaiKhoan.js";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

import Details from "./componemt/ScreenChiTiet/Detail";

function Home() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Homes />
    </View>
  );
}

function New() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TinTuc />
    </View>
  );
}

function ThongBao() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ThongBaos />
    </View>
  );
}

function TaiKhoan() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TaiKhoans />
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function NavigatorDetail() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={Details} options={{ title:'Sông hồng Premier Lounge - Nội Bài Quốc Nội',headerTintColor:'#fff', headerStyle:{ backgroundColor:'#00213c'} }}/>
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: "#e91e63",
        activeBackgroundColor: "#00213c",
        inactiveBackgroundColor: "#00213c",
        activeTintColor: "#ee9d23",
        inactiveTintColor: "#dee1e6",
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Trang Chủ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="New"
        component={New}
        options={{
          tabBarLabel: "Tin Tức",
          tabBarIcon: ({ color, size }) => (
            <Icon name="earth-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="ThongBao"
        component={ThongBao}
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color, size }) => (
            <Icon name="notifications-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="TaiKhoan"
        component={TaiKhoan}
        options={{
          tabBarLabel: "Tài Khoản",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#00213c" />
      <NavigationContainer>
        <NavigatorDetail />
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  ImageDetail: {
    flex: 0.4,
    backgroundColor: "red",
  },
});