import { FC } from 'react'
import { PostsResponse } from '../store/jsonplaceholder/jsonplaceholder'

const Post: FC<PostsResponse> = ({
  title,
  body
}) => {
  return (
    <div className='post'>
      <p className='post-title'>{title}</p>
      <p className='post-text'>{body}</p>
    </div>
  )
}

export default Post