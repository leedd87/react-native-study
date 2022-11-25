import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { styles } from '../themes/appTheme'
import { DrawerNavigationOptions, DrawerNavigationProp } from '@react-navigation/drawer'

interface Props extends NativeStackScreenProps<any, any> {
}

// interface Props extends DrawerNavigationProp<any, any> {

// }



export const Pagina1Screen = ({ navigation }: Props) => {

    // useEffect(() => {
    //     navigation.setOptions({
    //         headerLeft: () => <Button title='Menu' onPress={() => navigation.toggleDrawer()} />
    //     })

    // }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>
            <Button
                title='Ir pagina 2'
                onPress={() => navigation.navigate('Pagina2Screen')}
            />
            <Text>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>

                <TouchableOpacity style={{ ...styles.botonGrande, backgroundColor: '#5856D6' }} onPress={() => navigation.navigate('PersonaScreen', { id: 1, nombre: 'Pedro' })}>
                    <Text style={styles.botonGrandeTexto}>Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ ...styles.botonGrande, backgroundColor: '#FF9427' }} onPress={() => navigation.navigate('PersonaScreen', { id: 2, nombre: 'Maria' })}>
                    <Text style={styles.botonGrandeTexto}>Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
