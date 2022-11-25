import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pagina1Screen } from '../screens/Pagina1Screen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';

const Drawer = createDrawerNavigator();
const MenuLateralBasico = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}


export default MenuLateralBasico