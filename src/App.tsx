import { useEffect, useState } from 'react';
import { DateTime } from 'luxon'
import Dashboard from './pages/dashboard';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import GameStats from './pages/gameStats';
import { GameType } from './types';
import News from './pages/news';
import logo from './logo.svg'
import { useGetTodaysGamesQuery } from './services/games';
import { Container } from './utils/styles';
import Grid from './components/Grid/Grid';
import { Spacing, Screens, Colors, Body, Button } from '@tuantruong625/quotidian-component-library';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const ContentColumn = styled.div`
  grid-column: 1 / -1;
  padding: ${Spacing.size5};
  padding-top: 0;
  
  @media (min-width: ${Screens.md}) {
    padding: ${Spacing.size7};
  }
`

const FullColumnSpan = styled.div`
  grid-column: 1 / -1;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`


function App() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedGame, setSelectedGame] = useState('')
  const [todaysGames, setTodaysGames] = useState<GameType[]>([])
  const [todaysDate, setTodaysDate] = useState(DateTime.now())
  const location = useLocation()
  const [dayCount, setDayCount] = useState(0)
  const { data } = useGetTodaysGamesQuery(dayCount)

  const handleGameNavigation = (increment = false) => {
    if (!increment) {
      setDayCount(dayCount - 1)
      setTodaysDate(todaysDate.plus({ days: - 1 }))

      return
    }

    setDayCount(dayCount + 1)
    setTodaysDate(todaysDate.plus({ days: 1 }))
  }

  useEffect(() => {
    setTodaysGames(data?.data)
  }, [data])

  return (
    <Container>
      <Grid cols={12} gap={Spacing.size5} style={{ height: '100vh' }} >
        <ContentColumn>
          <Grid cols={12} gap={Spacing.size5}>
            <NavBar />
            <FullColumnSpan>
              <Body style={{ color: Colors.gray6 }}>{data?.date ? data?.date : todaysDate.toFormat('EEEE, MMM dd, yyyy')} </Body>
              <div>
                <FlexContainer>
                  <>

                    <Button onClick={() => { setTodaysDate(DateTime.now()) }} label="Today's Game" variant='text' size='lg' style={{ paddingLeft: 0, paddingRight: 0 }} />
                    {
                      location.pathname.includes('/game-stats') ?
                        <Link to='/'>
                          <Button icon={<ArrowLeftIcon />} shape='full' style={{ margin: Spacing.size1 }} />
                        </Link> :
                        <>
                          <Button icon={<ArrowLeftIcon />} shape='full' style={{ margin: Spacing.size1 }} onClick={() => handleGameNavigation()} />
                          <Button icon={<ArrowRightIcon />} shape='full' onClick={() => handleGameNavigation(true)} />
                        </>
                    }
                  </>
                </FlexContainer>
              </div>
            </FullColumnSpan>
            <Routes>
              <Route path="/" element={<Dashboard todaysGames={todaysGames} onSetSelectedGame={setSelectedGame} />} />
              <Route path={`/game-stats/:gameId`} element={<GameStats todaysGames={todaysGames} />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </Grid>
        </ContentColumn>
      </Grid >
    </Container >
  );
}

export default App;
