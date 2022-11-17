import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                BoxObjectModel
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
    title: {
        padding: 50,
        fontSize: 20,
        //width: 250,
        borderWidth: 10,
        marginRight: 20,
        marginLeft: 20,
    }
})