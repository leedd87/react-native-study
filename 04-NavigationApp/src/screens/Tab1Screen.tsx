import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { colores, styles } from '../themes/appTheme'

import Icon from 'react-native-vector-icons/Ionicons';


export const Tab1Screen = () => {
    useEffect(() => {
        console.log('Tabscreen1 effect')
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Iconos
            </Text>
            <Icon name="airplane-outline" size={80} color={colores.primary} />
            <Icon name="attach-outline" size={80} color={colores.primary} />
            <Icon name="bonfire-outline" size={80} color={colores.primary} />
            <Icon name="calculator-outline" size={80} color={colores.primary} />
            <Icon name="leaf-outline" size={80} color={colores.primary} />

        </View>
    )
}
