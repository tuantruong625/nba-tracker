import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { GameType } from "../../types";
import { MOCK_TODAYS_GAME } from "../../tests/testMocks";

interface GamesState {
 value: GameType[]
}

const initialState: GamesState = {
 value: []
}

export const gamesSlice = createSlice({
 name: 'games',
 initialState,
 reducers: {
  nextGame: (state) => {
   console.log(state);
  }
 }
})

export const { nextGame } = gamesSlice.actions

export default gamesSlice.reducer

