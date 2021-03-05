import React from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, Button, FlatList, Touchable, TouchableOpacity} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {

    // console.log(props);

    //push category meals screen onto Stack
    const pushToCategoryMealsScreen = () => {
        props.navigation.navigate({routeName: 'CategoryMeals'});
        //push will always push the screen onto the stack, whereas navigate might not
        // props.navigation.push('CategoryMeals');
        //replace() replaces the root screen in the stack with a new one, this would be useful for logging in a user
        // props.navigation.replace({routeName: 'CategoryMeals'});
    };

    //this function is used to render an item for the FlatList and returns a JSX component
    const renderGridItem = (itemData) => {
        return (
            <TouchableOpacity onPress={pushToCategoryMealsScreen}  style={styles.gridItem}>
                <View>
                    {/* this allows you to get the object of item of the Category class */}
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    return (
        // numColumns determines the amount of columns in the view
        // <View style ={styles.screen}>
        //     <Text>The Categories Screen!</Text>
        //     <Button title="Go to Meals!" onPress={pushToCategoryMealsScreen} />
        // </View>
        <FlatList key={(item) => item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
    )
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
    }
});

export default CategoriesScreen;