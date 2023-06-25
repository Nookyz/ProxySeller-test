import { FC } from 'react'
import { useGetUsersQuery } from '../store/jsonplaceholder/jsonplaceholder'
import Card from '../components/Card'

const Root: FC = () => {
  const { isLoading, data } = useGetUsersQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className='card-container'>
      {data?.map((user) => <Card {...user} />)}
    </div>
  )
}

export default Root