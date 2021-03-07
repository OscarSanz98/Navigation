import React from 'react';
import { View, Text, StyleSheet, FlatList  } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

const CategoryMealsScreen = props => {

    //function to render the Flatlist items 
    const RenderFlatList = () => {
        
    };

    //getParam() allows you to get any parameters passed to this screen through the navigation.
    const categoryID = props.navigation.getParam('categoryId');

    // const selectedCategory = CATEGORIES.find(cat => cat.id === categoryID);
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryID) >= 0);

    //push meal details screen onto Stack
    const pushToMealDetailsScreen = () => {
        props.navigation.navigate({routeName: 'MealDetail'});
    };


    return (
        <View style ={styles.screen}>
            {/* <Text>The Category Meal Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to Details" onPress={pushToMealDetailsScreen} />
            <Button title ="Go Back" onPress={() => {
                // props.navigation.goBack();
                //pop can only be used in a stack navigator, whereas goBack can be used in other types of navigators
                props.navigation.pop();
            }}/> */}
            <FlatList data={displayedMeals} key={(item) => item.id} renderItem={() => {}} />

        </View>
    );
};

//set navigation option properties to this screen
CategoryMealsScreen.navigationOptions = (navigationData) => {
    //getParam() allows you to get any parameters passed to this screen through the navigation.
    const categoryID = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === categoryID);

    return {
        headerTitle: selectedCategory.title,
    };
};



const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoryMealsScreen;