import { FC } from 'react'
import { useGetPostsQuery } from '../store/jsonplaceholder/jsonplaceholder'
import { useParams } from 'react-router-dom'
import Post from '../components/Post';

const Posts: FC = () => {
  const { userId } = useParams();
  const { isLoading, data } = useGetPostsQuery(userId!)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='post-container'>
      <p>userId: {userId}</p>
      {data?.map((post) => <Post {...post}/>)}
    </div>
  )
}

export default Posts