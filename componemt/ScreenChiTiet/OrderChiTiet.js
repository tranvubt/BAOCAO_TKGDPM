import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function OrderChiTiet() {
  return (
    <View style={styles.order}>
      <TouchableOpacity style={styles.btnOrder}>
        <Icon name="ios-cart" size={25} color="#ee9d23" />
        <Text style={styles.textOrder}>Đặt chỗ</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  order: {
    flex: 0.11,
    backgroundColor: "#00213c",
    justifyContent: "center",
    alignItems: "center",
  },
  btnOrder: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  textOrder: {
    color: "#ee9d23",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
