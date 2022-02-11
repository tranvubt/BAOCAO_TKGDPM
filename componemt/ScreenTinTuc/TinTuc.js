import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Dimensions, 
} from 'react-native'
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';
import TintucIteml from './TintucIteml'
import TheBussiessIteml from './TheBussiessIteml'

const FirstRoute = () => (
  <View style={[styles.scene]}>
    <TintucIteml/>
    <TintucIteml/>
    <TintucIteml/>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene]}>
    <TheBussiessIteml/>
    <TheBussiessIteml/>
    <TheBussiessIteml/>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  tintuc: FirstRoute,
  business: SecondRoute,
});

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'tintuc', title: 'Tin Tức' },
    { key: 'business', title: 'Business' },
]);
return (
    <View style={{ width: '100%', height: '100%' }}>
      <View style={styles.tile}>
        <Text style={styles.textTitle}>Tin tức</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.container}
        renderTabBar={ props => 
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#00213c' }}
            style={{ backgroundColor: '#ffffff' }}
            activeColor='#1b1b1d'
            inactiveColor='#8d8d8e'
            labelStyle={{fontSize:12,textTransform:'capitalize',fontWeight: 'bold'}}            
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor:'#ffffff',
  },
  scene: {
    flex: 1,
    backgroundColor:'#f7f7f7'
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