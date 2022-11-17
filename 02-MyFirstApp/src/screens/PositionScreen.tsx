import React from 'react'
import { AppRegistry, StyleSheet, Text, View } from 'react-native'

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde} />
            <View style={styles.cajaMorada} />
            <View style={styles.cajaNaranja} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: 300,
        // height: 300,
        backgroundColor: '#28C4D9'
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: 'purple',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        right: 0

    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: 'orange',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0
    },
    cajaVerde: {
        // width: 100,
        // height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        // position: 'absolute',
        ...StyleSheet.absoluteFillObject //esto es lo mismo que position absolute, top,right,bottom,left en 0 ya que se estira para abarcar todo el tamanio del padre
    }
})