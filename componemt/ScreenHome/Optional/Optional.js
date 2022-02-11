import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import OptinalIteml1 from './OptinalIteml1'
import OptinalIteml2 from './OptinalIteml2'

export default function Optional(props) {
  return (
    <View style={styles.Container}>
      <OptinalIteml1/>
      <OptinalIteml2/>
    </View>
  );
}
const styles = StyleSheet.create({
    Container:{
        flex:1,
        flexDirection:'row',
        height:130,
        alignItems:'stretch',
        justifyContent:'space-between'
    },
});
