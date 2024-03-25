import { View, Text, StyleSheet } from 'react-native'

export const BookedScreen = ({}) => {
    return (
        <View style={styles.content}>
            <Text>BookedScreen</Text>
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