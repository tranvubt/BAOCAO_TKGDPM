import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground,TouchableOpacity } from 'react-native';

function Button1() {
    return (
        <TouchableOpacity style={styles.Button1}>
            <Text style={styles.txtButton1}>Chi tiết</Text>
        </TouchableOpacity>
    );
}

function Button2() {
    return (
        <TouchableOpacity style={styles.Button2}>
            <Text style={styles.txtButton2}>Đặt phòng</Text>
        </TouchableOpacity>
    );
}

export default function PostsList(props) {
  return (
    <View style={styles.Container}>
      <View style={styles.title}>
          <Text style={styles.textTitle}>Phú quốc</Text>
      </View>
      <View style={styles.Iteml}>
          <View style={styles.Iteml1}>
              <ImageBackground style={styles.image} source={{uri:'https://cafefcdn.com/thumb_w/650/2020/photo1581320251237-1581320251432-crop-15813203908461011905670.jpg'}}>
                    <Text style={styles.textImage}>450.000đ</Text>
              </ImageBackground>
              <View style= {styles.content}>
                  <Text style= {styles.TitleContent} ellipsizeMode='tail' numberOfLines={2}>Sông hồng Premier Lounge - Nội Bài Quốc Nội</Text>
                  <Text style= {styles.TextContent}  ellipsizeMode='tail' numberOfLines={2}>Địa chỉ: Tầng 3, khu các ly đi ga quốc lội, gần cửa 4 và 9</Text>
              </View>
              <View style={styles.Button}>
                  <Button1/>
                  <Button2/>
              </View>
          </View>
          <View style={styles.Iteml2}>
              <ImageBackground style={styles.image} source={{uri:'https://noithattrevietnam.com/uploaded/2019/12/1-thiet-ke-phong-ngu-khach-san%20%281%29.jpg'}}>
                    <Text style={styles.textImage}>450.000đ</Text>
              </ImageBackground>
              <View style= {styles.content}>
                  <Text style= {styles.TitleContent} ellipsizeMode='tail' numberOfLines={2}>hsgdhfsdhfgghfghfghfgsdhgfsdhgfshdg</Text>
                  <Text style= {styles.TextContent}  ellipsizeMode='tail' numberOfLines={2}>sdfsdfsdfsdfhfghfghfgsghfghfgsddfsghfghfgsddf</Text>
              </View>
              <View style={styles.Button}>
                  <Button1/>
                  <Button2/>
              </View>
          </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    Container:{
        height:215,
        marginTop:20,
        flexDirection:'column'
    },
    title:{
        borderLeftWidth:3,
        flex:0.7,
        justifyContent:'center',
        marginBottom:5
    },
    textTitle:{
        fontWeight:'bold',
        textTransform:'uppercase',
        marginLeft:5 ,
        fontSize:14       
    },
    Iteml:{
        flex:6,
        flexDirection:'row'
    },
    Iteml1:{
        backgroundColor:'#ffffff',
        borderBottomLeftRadius:20,
        flex:1,
        shadowColor: '#000000',
        shadowOpacity: 0,
        elevation: 3,
        shadowRadius: 5 ,
        shadowOffset : { width: 0, height: 0}
    },
    Iteml2:{
        backgroundColor:'#ffffff',
        borderBottomRightRadius:20,
        flex:1,
        marginLeft:6,
        shadowColor: '#000000',
        shadowOpacity: 0.4,
        elevation: 3,
        shadowRadius: 15 ,
        shadowOffset : { width: 0, height: 15}
    },
    image:{
        flex:4,
        justifyContent:'flex-end'
    },
    textImage:{
        color:'#00213c',
        backgroundColor:'#dad1ca',
        width:70,
        fontWeight:'bold',
        textAlign: 'center',
        alignSelf:'flex-end',
        fontSize:13       
    },
    content:{
        flex:2.3,
        flexDirection:'column',
        margin:5
    },
    TitleContent:{
        fontWeight:'bold',
        flex:2,
        fontSize:11
    },
    TextContent:{
        flex:1.6,
        fontSize:9
    },
    Button:{
        flex:1.5,
        flexDirection:'row',
    },
    Button1:{
        flex:1,
        height:25,
        backgroundColor:'#ffa825',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:10
    },
    Button2:{
        flex:1,
        height:25,
        backgroundColor:'#00213c',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:20,
        marginRight:10
    },
    txtButton1:{
        fontWeight:'bold',
        fontSize:10,
        color:"#00213c"
    },
    txtButton2:{
        fontWeight:'bold',
        fontSize:10,
        color:"#ffa825"

    }
});
