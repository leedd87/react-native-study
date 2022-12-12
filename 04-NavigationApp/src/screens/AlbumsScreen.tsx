import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AutContext'
import { styles } from '../themes/appTheme'

export const AlbumsScreen = () => {
    const { logOut, authState } = useContext(AuthContext)
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>AlbumsScreen</Text>
            {authState.isLoggedIn && <Button title="LogOut" onPress={logOut} />}
        </View>
    )
}
