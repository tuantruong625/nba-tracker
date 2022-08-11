import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { GameType } from "../../types";
import { MOCK_TODAYS_GAME } from "../../tests/testMocks";

interface GamesState {
 value: GameType[]
}

const initialState: GamesState = {
 value: MOCK_TODAYS_GAME
}

export const gamesSlice = createSlice({
 name: 'games',
 initialState,
 reducers: {
  nextGame: (state, action) => {
   console.log(state.value)
   console.log(action)
  }
 }
})

export const { nextGame } = gamesSlice.actions

export default gamesSlice.reducer

