import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { Pagina2Screen } from '../screens/Pagina2Screen';
import { Pagina3Screen } from '../screens/Pagina3Screen';
import { PersonaScreen } from '../screens/PersonaScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    return (

        <Stack.Navigator
            // initialRouteName='' => por si quiero comenzar con otro screen que no es de los stacks (ejemplo formulario de ingreso?)
            screenOptions={{
                contentStyle: { backgroundColor: 'white' },
                headerShadowVisible: false
            }}>
            <Stack.Screen name="Pagina1Screen" options={{ title: 'Pagina 1' }} component={Pagina1Screen} />
            <Stack.Screen name="Pagina2Screen" options={{ title: 'Pagina 2' }} component={Pagina2Screen} />
            <Stack.Screen name="Pagina3Screen" options={{ title: 'Pagina 3' }} component={Pagina3Screen} />
            <Stack.Screen name="PersonaScreen" options={{ title: 'Persona' }} component={PersonaScreen} />

        </Stack.Navigator>

    );
}