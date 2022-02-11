import React from 'react'
import {TouchableOpacity, Text, View,StyleSheet, Image} from 'react-native'

export default function TheBussiessIteml(props){
    return(
        <TouchableOpacity style={styles.Container}>
            <View style={styles.TextView}>
                <Text style={styles.TextTitle} numberOfLines={2}>Các câu hỏi thường gặp</Text>
                <Text style={styles.content} numberOfLines={3}>1.Tôi có thể kích hoạt tư cách thành viên trước khi sử dụng không? Nếu hội viên mua thẻ trưcj tiếp tại đơn vị phát hành thẻ, vui lòng liên hệ với đơn vị phát hành thẻ, vui lòng liên hệ trực tiếp với đơn vị trực tiếp phát hành thẻ để được kích hoạt thẻ. Trong trường hợp hội viên nhận</Text>
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