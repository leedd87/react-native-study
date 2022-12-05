import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AutContext'
import { styles } from '../themes/appTheme'

export const SettingsScreen = () => {

    const { authState } = useContext(AuthContext)



    return (
        <View>
            <Text style={styles.title}>
                SettingsScreen
            </Text>
            <Text>
                {JSON.stringify(authState, null, 4)}
            </Text>
        </View>
    )
}
