import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../themes/appTheme';
import { Text } from 'react-native'

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const { top } = useSafeAreaInsets()

    return (
        <Tab.Navigator
            style={{ paddingTop: top }}
            sceneContainerStyle={{ backgroundColor: 'white' }}

            screenOptions={({ route }) => ({
                tabBarPressColor: colores.primary,
                tabBarShowIcon: true,
                tabBarIndicatorStyle: {
                    backgroundColor: colores.primary,
                    borderTopColor: colores.primary,
                    borderTopWidth: 0,
                    elevation: 0
                },

                tabBarIcon: ({ color }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Chat':
                            iconName = 'Ch';
                            break;

                        case 'Contacts':
                            iconName = 'Co';
                            break;

                        case 'Albums':
                            iconName = 'Al';
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>;
                },
            }
            )}
        >
            <Tab.Screen name="ChatScreen" component={ChatScreen} />
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="AlbumsScreen" component={AlbumsScreen} />
        </Tab.Navigator>
    );
}