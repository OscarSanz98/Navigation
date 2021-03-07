import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet, Platform, TouchableNativeFeedback} from 'react-native';

const CategoryGridTile = props => {

    let TouchableComponent = TouchableOpacity;

    if(Platform.OS === "android" && Platform.Version >= 21) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return(
        <View style={styles.gridItem} >
            <TouchableComponent style={{flex: 1}} onPress={props.onSelect}>
                <View style={{ ...styles.container  , ...{backgroundColor: props.color}}}>
                    {/* this allows you to get the object of item of the Category class */}
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',//ios
        shadowOpacity: 0.26,//ios
        shadowOffset: {width: 0, height: 2},//ios
        shadowRadius: 10,//ios
        elevation: 3, //android
        padding: 15,
        justifyContent: 'flex-end', //top to bottom, so this will place the text at the bottom of the view
        alignItems: 'flex-end' //left to right so flex-end will put it to the right
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 15,
        textAlign: 'right',
    }
});

export default CategoryGridTile;