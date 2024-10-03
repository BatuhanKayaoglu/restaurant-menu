import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useNavigation } from 'expo-router'
import MealDetails from './MealDetails'

export default function MealItem({ item }) {

    const navigation = useNavigation()

    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{ color: '#ccc' }} style={({ pressed }) => (pressed ? styles.butonPressed : null)} onPress={() => navigation.navigate('MealDetail', { id: item.id })}>
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: item.imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{item.title}</Text>
                    </View>
                    <MealDetails item={item} />
                </View>
            </Pressable>

        </View >
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 20,
        padding: 18,
        margin: 8
    },
    butonPressed: {
        opacity: 0.5
    }
})