import React from 'react'
import { View, Text, StyleSheet, TouchableNativeFeedback, Platform, TouchableOpacity } from 'react-native'

interface Props {
    title: string
    onPress: () => void
    position?: 'br' | 'bl'
}

export const Fab = ({ title, onPress, position = 'br' }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity style={[
                styles.fabLocation,
                (position === 'bl') ? styles.left : styles.right
            ]}
                onPress={onPress}
                activeOpacity={0.5}>
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={
                    [
                        styles.fabLocation,
                        (position === 'bl') ? styles.left : styles.right
                    ]} >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View >
        )
    }
    return (Platform.OS === 'ios') ? ios() : android()
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
