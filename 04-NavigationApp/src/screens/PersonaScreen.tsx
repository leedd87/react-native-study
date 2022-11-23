import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import { styles } from '../themes/appTheme'

interface Props extends NativeStackScreenProps<any, any> { }

export const PersonaScreen = ({ navigation, route }: Props) => {
    // console.log(JSON.stringify(props, null, 3))

    const params = route.params

    useEffect(() => {
        navigation.setOptions({
            title: params!.nombre
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>

                {JSON.stringify(params, null, 3)}
            </Text>

        </View>
    )
}
