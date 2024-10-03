import { StyleSheet, Text, View, Pressable, Platform } from 'react-native'
import React from 'react'

export default function CategoryGrid({ item, pressFood }) {
    return (
        <View style={styles.gridItem}>
            <Pressable style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={pressFood}>
                <View style={[styles.insideView, { backgroundColor: item.color }]}>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        elevation: 4,
        height: 150,
        margin: 16,
        borderRadius: 8,
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    insideView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    buttonPressed: {
        opacity: 0.5,
    }

})