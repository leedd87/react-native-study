import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/appTheme';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets()

    return (
        <Tab.Navigator
            style={{ paddingTop: top }}
            sceneContainerStyle={{ backgroundColor: 'white' }}
            screenOptions={({ route }) => ({
                tabBarPressColor: colores.primary
            })}
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}