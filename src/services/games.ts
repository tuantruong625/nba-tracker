import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { DateTime } from 'luxon'
import { GameType } from '../types'

const todaysDate = DateTime.now()

export const nbaApi = createApi({
  reducerPath: 'nbaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.balldontlie.io/api/v1/' }),
  endpoints: (builder) => ({
    getAllNbaGames: builder.query({
      query: () => `/games`,
    }),
    getTodaysGames: builder.query<GameType, number>({
      query: (day) => {
        const selectedDate = todaysDate.plus({ days: day })
        return `games?seasons[]=2023&start_date=${selectedDate.toFormat('yyyy-MM-d')}&end_date=${selectedDate.toFormat('yyyy-MM-d')}`
        // const selectedDate = `2022-04-16`
        // return `games?seasons[]=2021&start_date=${selectedDate}&end_date=${selectedDate}`
      },
    })
  }),
})

// `https://www.balldontlie.io/api/v1/games?seasons[]=2021&start_date=2022-04-16&end_date=2022-04-16`

export const { useGetAllNbaGamesQuery, useGetTodaysGamesQuery } = nbaApi