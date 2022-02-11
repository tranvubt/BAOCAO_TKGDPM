import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import ThongBaoIteml from './ThongBaoIteml'

export default function ThongBao() {
  
return (
    <View style={{ width: '100%', height: '100%' }}>
        <View style={styles.tile}>
            <Text style={styles.textTitle}>Thông báo</Text>
        </View>
        <View style={styles.container}>
            <ThongBaoIteml/>
            <ThongBaoIteml/>
            <ThongBaoIteml/>
            <ThongBaoIteml/>
        </View>        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#f2f2f2',
    height:"100%",
    width:"100%"
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    color: 'white',
    textTransform: 'uppercase',
    marginTop: 5,
  },
  tile: {
    backgroundColor: '#00213c',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 57,
  },
});