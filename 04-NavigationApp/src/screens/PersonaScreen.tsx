import React, { useEffect, useContext } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { View, Text } from 'react-native'
import { styles } from '../themes/appTheme'
import { RootStackParams } from '../navigator/StackNavigator'
import { AuthContext } from '../context/AutContext'

interface Props extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'> { }

// interface RouteParams {
//     id: number,
//     nombre: string,
// }

export const PersonaScreen = ({ navigation, route }: Props) => {
    // console.log(JSON.stringify(props, null, 3))

    //const params = route.params as RouteParams
    const params = route.params
    const { changeUsername } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre
        })
    }, [])

    useEffect(() => {
        changeUsername(params.nombre)
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>

                {JSON.stringify(params, null, 3)}
            </Text>

        </View>
    )
}
