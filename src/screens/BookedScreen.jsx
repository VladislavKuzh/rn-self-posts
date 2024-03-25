import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { DATA } from '../data'
import { Post } from '../components/Post'

export const BookedScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {postId: post.id, date: post.date, booked: post.booked})
    }
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA.filter(post => post.booked)}
                keyExtractor={post => post.id}
                renderItem={({item}) => <Post post={item} onOpen={openPostHandler}/>}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})