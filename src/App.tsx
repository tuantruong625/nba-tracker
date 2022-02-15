import { useEffect, useState } from 'react';
import axios from 'axios'
import { DateTime } from 'luxon'
import Dashboard from './pages/dashboard';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import GameStats from './pages/gameStats';
import { GameType } from './types';
import News from './pages/news';
import logo from './logo.svg'

function App() {
  const [todaysGames, setTodaysGames] = useState<GameType[]>([])
  const [todaysDate, setTodaysDate] = useState(DateTime.now())
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedGame, setSelectedGame] = useState('')
  const location = useLocation()

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2021&start_date=${todaysDate.toFormat('yyyy-MM-d')}&end_date=${todaysDate.toFormat('yyyy-MM-d')}`)
      setTodaysGames(data.data)
    })()
  }, [todaysDate])

  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-12 h-screen gap-6">
        <div className="col-span-12 p-5 md:p-10 pt-0">
          <div className="grid grid-cols-12 gap-6">
            <nav className="col-span-full flex justify-between items-center py-6 border border-gray-100 border-t-0 border-r-0 border-l-0 sticky top-0 bg-white">
              <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-5" />
                <p className='pl-2 text-xl text-gray-800'>Nba Tracker</p>
              </div>
              <div>
                <Link to="/" className="px-2">Home</Link>
                <Link to="/news" className="px-2">News</Link>
              </div>
            </nav>

            <div className="col-span-full">
              <p className="text-gray-600">{todaysDate.toFormat('EEEE, MMM dd, yyyy')} </p>
              <div>
                <div className="flex items-center">
                  <>
                    <button onClick={() => { setTodaysDate(DateTime.now()) }}>
                      <h1 className="text-3xl font-bold mr-4">Today's Games</h1>
                    </button>
                    {
                      location.pathname.includes('/game-stats') ? <button className='bg-gray-50 p-1 w-10 h-10 rounded-full text-gray-500 hover:bg-blue-500 hover:text-gray-50 hover:shadow-lg'><Link to="/">←</Link></button> : <>
                        <button className="bg-gray-50 p-1 w-10 h-10 rounded-full text-gray-500 hover:bg-blue-500 hover:text-gray-50 hover:shadow-lg" onClick={() => { setTodaysDate(todaysDate.plus({ days: -1 })) }}>←</button>
                        <button className="bg-gray-50 p-1 w-10 h-10 rounded-full text-gray-500 hover:bg-blue-500 hover:text-gray-50 hover:shadow-lg" onClick={() => { setTodaysDate(todaysDate.plus({ days: 1 })) }}>→</button>
                      </>
                    }
                  </>
                </div>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<Dashboard todaysGames={todaysGames} onSetSelectedGame={setSelectedGame} />} />
              <Route path={`/game-stats/:gameId`} element={<GameStats todaysGames={todaysGames} />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
