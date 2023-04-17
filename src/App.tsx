import { useEffect, useState } from 'react';
import { DateTime } from 'luxon'
import Dashboard from './pages/dashboard';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import GameStats from './pages/gameStats';
import { GameType } from './types';
import News from './pages/news';
import { useGetTodaysGamesQuery } from './services/games';
import { Container } from './utils/styles';
import Grid from './components/Grid/Grid';
import styled from 'styled-components';
import NavBar from './components/NavBar';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const ContentColumn = styled.div`
  grid-column: 1 / -1;
  padding: 1.5rem;
  padding-top: 0;
  
  @media (min-width: 768px) {
    padding: 2.5rem;
  }
`

const FullColumnSpan = styled.div`
  grid-column: 1 / -1;
`

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
      <Grid cols={12} gap="1.5rem" style={{ height: '100vh' }} >
        <ContentColumn>
          <Grid cols={12} gap="1.5rem">
            <NavBar />
            <FullColumnSpan>
                <FlexContainer>
                <p style={{ color: "#3B4252" }}>{data?.date ? data?.date : todaysDate.toFormat('EEEE, MMM dd, yyyy')} </p>
                <div style={{display: 'flex', alignItems: 'center'}}>

                  <>
                    {
                      location.pathname.includes('/game-stats') ?
                      <Link to='/'>
                          <button>home</button>
                        </Link> :
                        <>
                          <button  onClick={() => handleGameNavigation()} >left</button>
                          <button  onClick={() => handleGameNavigation(true)} >right</button>
                        </>
                    }
                  </>
                    </div>
                </FlexContainer>
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
