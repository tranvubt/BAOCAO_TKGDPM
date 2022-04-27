import React from 'react'
import {TouchableOpacity, Text, View,StyleSheet, Image} from 'react-native'
export default function OptinalIteml2(props){
    return(
        <View style={styles.Container}>
            <TouchableOpacity style={styles.Buttons}>
                <Text style={{fontWeight:'bold', color:'#ffa825'}}>Nạp điểm thành viên</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    Container:{
        alignItems:'center',
        borderRadius:4,
        backgroundColor:'#FFF',
        padding:10,
        justifyContent:'center',
        flex:1
    },
    Buttons:{
        width:150,
        height:40,
        backgroundColor:'#00213c',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        marginTop:30
    }
});