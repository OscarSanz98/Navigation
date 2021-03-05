import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';


const CategoryMealsScreen = props => {

    //push meal details screen onto Stack
    const pushToMealDetailsScreen = () => {
        props.navigation.navigate({routeName: 'MealDetail'});
    };


    return (
        <View style ={styles.screen}>
            <Text>The Category Meal Screen!</Text>
            <Button title="Go to Details" onPress={pushToMealDetailsScreen} />
            <Button title ="Go Back" onPress={() => {
                // props.navigation.goBack();
                //pop can only be used in a stack navigator, whereas goBack can be used in other types of navigators
                props.navigation.pop();
            }}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;