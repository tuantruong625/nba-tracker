import { useEffect, useState } from 'react';
import axios from 'axios'
import { DateTime } from 'luxon'
import Dashboard from './pages/dashboard';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import GameStats from './pages/gameStats';
import { GameType } from './types';
import News from './pages/news';

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
      <div className="grid grid-cols-12 h-screen gap-6 pb-6">
        <nav className="row-span-full col-span-2 bg-gray-100 flex flex-col items-center justify-center">
          <Link to="/" className="flex justify-around items-center rounded-sm p-2 my-2">Home</Link>
          <Link to="/news" className="flex justify-around items-center rounded-sm p-2 my-2">News</Link>
        </nav>
        <div className="col-span-10 pb-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-full py-5">
              <input type="text" placeholder="Search..." className="px-2 py-2 border rounded-md" />
            </div>

            <div className="col-span-full relative">
              <p className="text-gray-600">{todaysDate.toFormat('EEEE, MMM dd, yyyy')} </p>
              <div>
                <div className="flex">
                  {
                    location.pathname === '/' ?
                      <>
                        <button onClick={() => { setTodaysDate(DateTime.now()) }}>
                          <h1 className="text-3xl font-bold mr-4">Today's Games</h1>
                        </button>
                        <button className="bg-gray-50 p-1 w-10 h-10 rounded-full text-gray-500 hover:bg-blue-500 hover:text-gray-50 hover:shadow-lg" onClick={() => { setTodaysDate(todaysDate.plus({ days: -1 })) }}>←</button>
                        <button className="bg-gray-50 p-1 w-10 h-10 rounded-full text-gray-500 hover:bg-blue-500 hover:text-gray-50 hover:shadow-lg" onClick={() => { setTodaysDate(todaysDate.plus({ days: 1 })) }}>→</button>
                      </>
                      : <h1 className="text-3xl font-bold mr-4">Today's News</h1>
                  }
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
