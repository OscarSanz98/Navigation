import React from 'react';
import {  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import  { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

//create a stack used to push and pop screens 
const MealsNavigation = createStackNavigator({
    //register screens as key value pairs - use any identifier as a property name, and the value is the pointer to what screen u want to show
    Categories: CategoriesScreen,
    CategoryMeals: {
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen

});

//wrap most important route navigator with createAppContainer() as it will return a react component with JSX
export default createAppContainer(MealsNavigation);