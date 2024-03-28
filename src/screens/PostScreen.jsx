import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native'
import { THEME } from '../theme';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { removePost } from '../store/actions/post';
export const PostScreen = ({route, navigation}) => {
  const { postId } = route.params;

  const post = useSelector(state => state.post.allPosts.find(p => p.id === postId))

  const booked = useSelector(state=>
    state.post.bookedPosts.some(post => post.id === postId)
  )

  const dispatch = useDispatch()

  useEffect(() => {
    navigation.setParams({ booked })
  }, [booked])

  const removeHandler = () => {
    Alert.alert(
      'Delete post', 
      'Are you sure you want to delete the post?', 
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete', 
          style: 'destructive',
          onPress: () => {
            navigation.navigate('Main')
            dispatch(removePost(postId))
          }
        },
      ],
      {cancelable: false}
    );
  }

  if(!post) {
    return null
  }

  return (
    <ScrollView style={styles.content}>
      <Image source={{uri: post.img}} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>
          {post.text}
        </Text>
      </View>
      <Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular'
  }
})