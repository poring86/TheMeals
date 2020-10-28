import React from 'react'
import {TouchableOpacity, View, Text,  StyleSheet} from 'react-native'

const CategoryGridTile = props => {
    return(
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View style={{...styles.container,...{backgroundColor: props.color}}}>
                <Text>
                    {props.title}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    },
    container:{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowRadius: 10,shadowOpacity: 0.26,
        elevation: 3,
    }
})

export default CategoryGridTile