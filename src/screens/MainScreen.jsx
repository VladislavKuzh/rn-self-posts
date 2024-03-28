import { useDispatch, useSelector } from 'react-redux'
import { PostList } from '../components/PostList'
import { loadPost } from '../store/actions/post'
import { useEffect } from 'react'

export const MainScreen = ({ navigation }) => {
    const openPostHandler = post => {
        navigation.navigate('Post', {
            postId: post.id, 
            date: post.date, 
            booked: post.booked
        })
    }

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(loadPost())
    }, [dispatch])

    const {allPosts} = useSelector(state => state.post)
    

    return <PostList data={allPosts} onOpen={openPostHandler}/>
}