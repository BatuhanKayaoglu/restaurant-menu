import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SubTitle({ children }) {
    return (

        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 6,
        textAlign: 'center',
        padding: 6,
    },
    subTitleContainer: {
        margin: 6,
        textAlign: 'center',
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    }
})