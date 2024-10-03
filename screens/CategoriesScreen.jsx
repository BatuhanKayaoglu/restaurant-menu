import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGrid from '../components/CategoryGrid'
import { useNavigation } from '@react-navigation/native'

export default function CategoriesScreen() {

    const navigation = useNavigation()

    const renderCategoryItem = (itemData) => {
        return (
            <View style={styles.categoryGridView}>
                <CategoryGrid style={styles.grid} item={itemData.item} pressFood={() => navigation.navigate('MealOverview', { categoryId: itemData.item.id })}></CategoryGrid>
            </View >
        )
    }

    return (
        <FlatList style={styles.screen}
            data={CATEGORIES}
            key={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
    )
}

const styles = StyleSheet.create({
    categoryGridView: {
        flex: 1,
    },
})