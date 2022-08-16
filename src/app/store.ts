import { nbaApi } from './../services/games';
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import gamesReducer from './games/gamesSlice'


export const store = configureStore({
 reducer: {
  games: gamesReducer,
  [nbaApi.reducerPath]: nbaApi.reducer
 },
 middleware: (getDefaultMiddleWare) => {
  return getDefaultMiddleWare().concat(nbaApi.middleware);
 },
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch