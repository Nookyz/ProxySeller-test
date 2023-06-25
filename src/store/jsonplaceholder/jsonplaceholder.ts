import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

interface Address {
  city: string;
  geo: { lat: string, lng: string }
  street: string;
  suite: string;
  zipcode: string;
}

export interface UsersResponse {
  id: number;
  email: string;
  name: string;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: Address;
}

export interface PostsResponse {
  body: string;
  id: number;
  title: string;
  userId: string;
}

export interface AlbumsResponse {
  userId: number
  id: number
  title: string
}

export const BASE_URL = 'https://jsonplaceholder.typicode.com/'

// https://jsonplaceholder.typicode.com/users
export const jsonplaceholderApi = createApi({
  reducerPath: 'jsonplaceholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: build => ({
    getUsers: build.query<UsersResponse[], void>({
      query: () => ({
        url: 'users'
      })
    }),
    getPosts: build.query<PostsResponse[], string>({
      query: (search: string) => ({
        url: 'posts',
        params: {
          userId: search
        }
      })
    }),
    getAlbums: build.query<AlbumsResponse[], string>({
      query: (search: string) => ({
        url: 'albums',
        params: {
          userId: search
        }
      })
    })
  })
})

export const { useGetUsersQuery, useGetPostsQuery, useGetAlbumsQuery } = jsonplaceholderApi