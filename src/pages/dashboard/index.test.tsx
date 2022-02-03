import { render } from "@testing-library/react";
import Games from ".";
import { MOCK_TODAYS_GAME } from "../../tests/testMocks";

const MOCK_SET_SELECT_SELECTED_GAME = jest.fn()

describe('Dashboard', () => {
 it('renders todays game', () => {

  render(<Games todaysGames={MOCK_TODAYS_GAME} onSetSelectedGame={MOCK_SET_SELECT_SELECTED_GAME} />)
 })
});
