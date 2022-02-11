 import React from 'react';
 import {
   StyleSheet,
   View,
   ScrollView,
   Platform,
   StatusBar
 } from 'react-native'
 import Tile from './Title/Title.js'
 import News from './New/News.js'
 import Optional from './Optional/Optional.js'
 import PostsList from './PostList/PostsList.js'
 import {newData} from '../../data/Data'

 export default function Homes(props) {
  
  return (
    <View style ={styles.Container}>
      <View>
        <Tile/>
      </View>
      <View>
          <News data = {newData}/>
      </View>
      <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>        
        <View >
          <Optional/>
        </View>
        <View >
          <PostsList/>
          <PostsList/>
          <PostsList/>
          <PostsList/>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container:{
    width:"100%",
    height:"100%",
    backgroundColor:'#f7f7f7',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
 },
 scroll:{
  width:380,
  alignSelf:'center'
 }
});