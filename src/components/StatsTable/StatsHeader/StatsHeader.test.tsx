import { render, screen } from '@testing-library/react';
import StatsHeader, { TABLE_HEADERS } from './StatsHeader';

describe('StatsHeader', () => {
  it('renders TH', () => {
    render(<StatsHeader />)
    TABLE_HEADERS.forEach((header) => {
      expect(screen.getAllByText(header)).toBeTruthy()
    })
  })
})