import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { styles } from '../themes/appTheme'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

interface Props extends NativeStackScreenProps<any, any> { }

export const Pagina2Screen = ({ navigation }: Props) => {

    useEffect(() => {
        navigation.setOptions({
            title: 'Hola  Mundo',
            headerBackTitle: ''
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                Pagina2Screen
            </Text>
            <Button
                title='Ir pagina 3'
                onPress={() => navigation.navigate('Pagina3Screen')}
            />
        </View>
    )
}
