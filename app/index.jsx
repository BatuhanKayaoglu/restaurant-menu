import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import MealOverviewScreen from '../screens/MealOverviewScreen';
import { StatusBar } from 'expo-status-bar';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from '../screens/FavoritesScreen';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            sceneContainerStyle: { backgroundColor: '#3f2f25' },
            drawerContentStyle: { backgroundColor: '#351401' },
            drawerActiveTintColor: '#351401',
            drawerInactiveTintColor: 'white',
            drawerActiveBackgroundColor: '#e4baa1',
        }}>
            <Drawer.Screen name="Categories" component={CategoriesScreen} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        </Drawer.Navigator>
    )
}


export default function index() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer independent={true}>
                <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#351401' }, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25' } }}>
                    <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ title: 'All Categories', headerShown: false }} />
                    <Stack.Screen name="MealOverview" component={MealOverviewScreen} />
                    <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{ title: 'MealDetail' }} />
                </Stack.Navigator>
            </NavigationContainer >
        </>
    )
}

const styles = StyleSheet.create({})