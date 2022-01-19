import { render, screen } from "@testing-library/react"
import StatsTable from "."
import { MOCK_GAME_STATS, MOCK_TEAM_NAME } from "../../../tests/testMocks"



describe('StatsTable', () => {
 it.only('renders table', () => {
  render(<StatsTable teamName={MOCK_TEAM_NAME} gameStats={MOCK_GAME_STATS} />)

  expect(screen.getByText('E.Truong')).toBeInTheDocument()
  expect(screen.queryByText('Game has not start yet')).not.toBeInTheDocument()
 })
}) 