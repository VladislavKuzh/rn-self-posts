import { View, Text, StyleSheet } from 'react-native'

export const CreateScreen = ({}) => {
    return (
        <View style={styles.content}>
            <Text>CreateScreen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})