import React from 'react';
import { render } from 'react-dom';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {

    // console.log(props);

    // //push category meals screen onto Stack
    // const pushToCategoryMealsScreen = (itemData) => {
        
    //     //push will always push the screen onto the stack, whereas navigate might not
    //     // props.navigation.push('CategoryMeals');
    //     //replace() replaces the root screen in the stack with a new one, this would be useful for logging in a user
    //     // props.navigation.replace({routeName: 'CategoryMeals'});
    // };

    //this function is used to render an item for the FlatList and returns a JSX component
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title} 
                color={itemData.item.color}
                onSelect={() => {
                props.navigation.navigate({
                    routeName: 'CategoryMeals', 
                    params:{
                        categoryId: itemData.item.id
                    }
                });
            }}/>
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

//you can add properties to the screen down here - i.e. navigation options
CategoriesScreen.navigationOptions = {
    headerTitle: 'Home',
    
};

const styles = StyleSheet.create({
    screen: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    
});

export default CategoriesScreen;