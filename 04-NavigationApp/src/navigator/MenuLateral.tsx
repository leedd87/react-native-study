import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigator } from './StackNavigator';
import { Text, View, Image } from 'react-native';
import { styles } from '../themes/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();


const MenuLateral = () => {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MenuInterno {...props} />}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            {/*Parte del Avatar */}
            <View style={styles.avatarContainer}>
                <Image source={{ uri: 'https://photo.jtbc.joins.com/news/jam_photo/202202/10/acdbb4bc-d5b8-4a0f-88b1-376efbf966a3.jpg' }}
                    style={styles.avatar}
                />
            </View>
            {/*Opciones de menu */}
            <View style={styles.menuContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Tabs')} style={{ ...styles.menuBoton, flexDirection: 'row' }}>
                    <Icon name='compass-outline' size={25} color='black' />
                    <Text style={styles.menuTexto}> Navegacion</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')} style={{ ...styles.menuBoton, flexDirection: 'row' }}>
                    <Icon name='cog-outline' size={25} color='black' />
                    <Text style={styles.menuTexto}> Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}


export default MenuLateral