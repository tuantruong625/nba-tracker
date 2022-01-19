import { render, screen } from "@testing-library/react"
import TopPerformers from "."
import { MOCK_GAME_STATS, MOCK_TEAM_NAME } from "../../tests/testMocks"

describe('Top Performers', () => {
 it('renders the top performer', () => {
  render(<TopPerformers teamName={MOCK_TEAM_NAME} gameStats={MOCK_GAME_STATS} />)
  expect(screen.getByText('Ellie Truong')).toBeInTheDocument()
 })
})




