import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


export default function TaiKhoan() {  
return (
    <View style={{ width: '100%', height: '100%' }}>
        <View style={styles.tile}/>
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Icon name="information-circle-outline" size={30} color='#9a9a9a' style={styles.icon}/>
                    <Text numberOfLines={2} style={styles.buttonText}>Điều khoản sử dụng</Text>
                    <Icon name="chevron-forward-outline" size={30} color='#9a9a9a' style={styles.icon}/>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.button}>
                    <Icon name="log-in-outline" size={30} color='#9a9a9a' style={styles.icon}/>
                    <Text numberOfLines={2} style={styles.buttonText}>Đăng nhập</Text>
                </View>
            </TouchableOpacity>
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
    tile: {
        backgroundColor: '#00213c',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 57,
    },
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