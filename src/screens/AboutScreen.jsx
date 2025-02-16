import { View, Text, StyleSheet } from 'react-native'

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>This is the best app for personal notes.</Text>
            <Text>Application version <Text style={styles.version}>1.0.0</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    version: {
        fontFamily: 'open-bold'
    }
})