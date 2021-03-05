import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import  { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

import Colors from '../constants/Colors';

//create a stack used to push and pop screens 
const MealsNavigation = createStackNavigator({
    //register screens as key value pairs - use any identifier as a property name, and the value is the pointer to what screen u want to show
    Categories: {
        screen: CategoriesScreen,
        
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen

}, {
    //mode allows you to change the style of transition between screens, so in this case iOS will change transition to modal
    // mode: 'modal',

    //initialRouteName will start the app on the stated screen 
    // initialRouteName: 'MealDetail',

    //the following styling will now be applied to every screen in the stack container.
    //Avoids code repetition.
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    }
});

//wrap most important route navigator with createAppContainer() as it will return a react component with JSX
export default createAppContainer(MealsNavigation);