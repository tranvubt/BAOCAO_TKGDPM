import React from 'react'
import {TouchableOpacity, Text, View,StyleSheet} from 'react-native'
export default function OptinalIteml1(props){
    return(
        <View style={styles.Container}>
            <Text style={styles.Texts}>Trở thành hội viên</Text>
            <TouchableOpacity style={styles.Buttons}>
                <Text style={{fontWeight:'bold'}}>Gửi yêu cầu</Text>
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
        flex:1,
        marginRight:6
    },
    Buttons:{
        width:150,
        height:40,
        backgroundColor:'#ffa825',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        justifyContent:'center',
        alignItems:'center',
        marginTop:22
    },
    Texts:{
        fontWeight:'bold',
        fontSize:15,
        marginTop:10
    },
});