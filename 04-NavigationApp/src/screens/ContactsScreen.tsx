import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { AuthContext } from '../context/AutContext'
import { styles } from '../themes/appTheme'

export const ContactsScreen = () => {
    const { signIn, authState } = useContext(AuthContext)
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                ContactsScreen
            </Text>

            {!authState.isLoggedIn && <Button title="SignIn" onPress={signIn} />}
        </View>
    )
}
