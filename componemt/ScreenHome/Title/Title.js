import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export default function Title(props) {
  return (
    <View style={styles.tile}>
      <View style={styles.searchBarContainer}>
        <Icon name="md-search" size={30}/>
        <TextInput style={styles.searchInput} placeholder="Nhập tên địa điểm du lịch" />
      </View>
      <View style={styles.contact}>
        <Icon name="call-outline" size={30} color='#f39b28'/>
        <Text style={{ marginLeft: 10, color: '#f39b28' }}>0931 529 903</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tile: {
    backgroundColor: '#00213c',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height:60
  },
  searchBarContainer: {
    borderRadius: 20,
    backgroundColor: '#ffffff',
    height: 35,
    marginLeft: 15,
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    height: '100%',
    paddingLeft: 15,
    fontSize: 17,
    flex: 2,
    fontSize:13
  },
  contact: {
    height: 35,
    marginLeft: 16,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
