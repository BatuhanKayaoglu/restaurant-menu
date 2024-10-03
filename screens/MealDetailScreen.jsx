import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import SubTitle from '../components/MealDetail/SubTitle'
import List from '../components/MealDetail/List'
import IconButton from '../components/IconButton'

export default function MealDetailScreen({ route, navigation }) {

    const mealId = route.params.id

    const selectedMeal = MEALS.find(c => c.id === mealId)
    console.log(selectedMeal)

    // üst başlıklar dinamik olabilmesi adına yani => MealDetailScreen'e tıkladığımızda üst başlıkta MealDetailScreen yerine tıkladığımız meal'in adı yazsın diye
    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal.title,
        });
    }, [mealId, navigation])


    function headerButtonPressHandler(e) {

    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton onPress={headerButtonPressHandler} icon="star" color="white" />
            ),
        });
    }, [headerButtonPressHandler, navigation]);


    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails item={selectedMeal} textStyle={styles.detailText} />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeal.ingredients} />

                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '85%',
    }

})