import React from 'react'
import { View, StyleSheet , Image, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')
const height=200


const NewsIteml = ({ item }) => {
    return (
        <View style={styles.cardView}>
            <Image style={styles.image} source={{ uri: item.url }} />
        </View>
    )
}

const styles = StyleSheet.create({
    cardView: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: 'white'
    },
    image: {
        width: width,
        height: height
    }
})

export default NewsIteml