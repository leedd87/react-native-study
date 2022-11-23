import React from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styles } from '../themes/appTheme'

interface Props extends NativeStackScreenProps<any, any> {

}

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button
                title='Ir pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            <Text>Navegar con argumentos</Text>
            <TouchableOpacity onPress={() => navigation.navigate('PersonaScreen')}>
                <Text>Pedro</Text>
            </TouchableOpacity>
        </View>
    )
}
