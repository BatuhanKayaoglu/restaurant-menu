import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS, CATEGORIES } from '../data/dummy-data'
import MealItem from '../components/MealItem'

export default function MealOverviewScreen({ route, navigation }) {

    const categoryId = route.params.categoryId

    const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0)

    // üst başlıklar dinamik olabilmesi adına yani => MealOverViewScreen'e tıkladığımızda üst başlıkta MealOverViewScreen yerine tıkladığımız category'nin adı yazsın diye
    const categoryTitle = CATEGORIES.find(c => c.id === categoryId).title
    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryTitle,
        });
    }, [categoryId, navigation])


    function renderMealItem(itemData) {
        return (
            <MealItem item={itemData.item} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})