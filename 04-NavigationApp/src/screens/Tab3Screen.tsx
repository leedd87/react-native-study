import React, { useEffect } from 'react'
import { Text, View } from 'react-native'


export const Tab3Screen = () => {
    useEffect(() => {
        console.log('Tabscreen1 effect')
    }, [])

    return (
        <View>
            <Text>
                Tab3Screen
            </Text>
        </View>
    )
}
