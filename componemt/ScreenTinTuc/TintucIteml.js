import React from 'react'
import {TouchableOpacity, Text, View,StyleSheet, Image} from 'react-native'

export default function TintucIteml(props){
    return(
        <TouchableOpacity style={styles.Container}>
            <View style={styles.TextView}>
                <Text style={styles.TextTitle} numberOfLines={2}>Phòng chờ thương gia sông hồng đã có mặt trên trang đánh giá địa điểm hàng đầu tripadvisor</Text>
                <Text style={styles.content} numberOfLines={3}>Hệ thống phòng chờ thương gia Sông Hồng đã niêm yết tài khoản thành công trên trang TripAdvisor và nhận được nhiều lượt đánh giá cao trên trang review địa điểm hàng đầu thế giới này</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Container:{
        backgroundColor:'#ffffff',
        borderRadius:20,
        shadowColor: '#000000',
        shadowOpacity: 0,
        elevation: 3,
        shadowRadius: 5 ,
        shadowOffset : { width: 0, height: 10},
        alignItems:'center',
        marginVertical:10,
        marginLeft:20,
        marginRight:20     
    },
    TextView:{
        margin:10,
        alignItems:'baseline'
    },
    TextTitle:{
        fontWeight: 'bold',
        fontSize: 13,
        color: '#000000',
        textTransform: 'uppercase'
    },
    content:{
        fontSize:10,
        color: '#000000',
        marginTop:2,
    }
});