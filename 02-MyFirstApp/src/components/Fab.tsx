import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

interface Props {
    title: string
    onPress: () => void
    position?: 'br' | 'bl'
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {



    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.fabLocation,
                (position === 'bl') ? styles.left : styles.right
            ]}
        >
            <View style={styles.fab}>
                <Text style={styles.fabText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },

    left: {
        left: 25
    },
    right: {
        right: 25
    },
    fab: {
        backgroundColor: '#5856d6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
