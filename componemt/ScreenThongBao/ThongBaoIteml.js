import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback 
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export default function ThongBaoIteml() {
  
return (
    
    <TouchableWithoutFeedback>
        <View style={styles.button}>
            <Icon name="notifications-circle-outline" size={30} color='#f39b28' style={styles.icon}/>
            <Text style={styles.buttonText} numberOfLines={2}>Thông báo, vũ rất đẹp trai!</Text>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#cdcdcd',
    marginLeft:4,
    marginRight:4,
    height:60
  },
  buttonText: {
    color:'#101010',
    flex:3
  },
  icon:{
    marginLeft:20,
    marginRight:25
  }
});