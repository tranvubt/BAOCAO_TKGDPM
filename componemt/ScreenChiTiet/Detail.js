import * as React from "react";
import { StyleSheet, View, StatusBar, SafeAreaView } from "react-native";
import OrderChiTiet from "./OrderChiTiet";
import WebViewChiTiet from "./WebViewChiTiet.js";
import News from '../ScreenHome/New/News'
import {newData} from '../../data/Data'

export default function Detail() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#00213c" />
      <News data = {newData} style={styles.ImageDetail}/>
      <WebViewChiTiet/>
      <OrderChiTiet/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f7f7f7",
    height: "100%",
    width: "100%",
  }
});
