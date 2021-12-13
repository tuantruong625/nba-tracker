import { useEffect, useState } from 'react';
import axios from 'axios'
import { DateTime } from 'luxon'
import Dashboard from './pages/dashboard';
import { Route, Routes } from 'react-router-dom';
import GameStats from './pages/gameStats';

type ITeam = {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
  img: string;
}

export type IGames = {
  id: number;
  date: string;
  home_team: {
    name: string;
  };
  home_team_score: number | undefined;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: {
    name: string;
  };
  visitor_team_score: number | undefined
}

function App() {
  const [teams, setTeams] = useState<ITeam[]>([])
  const [todaysGames, setTodaysGames] = useState<any[]>([])
  const [todaysDate, setTodaysDate] = useState(DateTime.now())
  const [showGameStats, setShowGameStats] = useState(false)
  const [selectedGame, setSelectedGame] = useState('')

  const getTeams = async () => {
    const { data } = await axios.get('https://www.balldontlie.io/api/v1/teams')
    setTeams(data.data)
  }

  const getTodaysGame = async () => {
    const { data } = await axios.get(`https://www.balldontlie.io/api/v1/games?seasons[]=2021&start_date=${todaysDate.toFormat('yyyy-MM-d')}&end_date=${todaysDate.toFormat('yyyy-MM-d')}`)
    setTodaysGames(data.data)
  }



  useEffect(() => {
    getTodaysGame()
  }, [todaysDate])

  return (
    <div className="mx-auto container">
      <div className="grid grid-cols-12 h-screen gap-6">
        <div className="row-span-full col-span-2 bg-gray-100">
          {/* navbar */}
        </div>
        <div className="col-span-10">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-full py-5">
              <input type="text" placeholder="Search..." className="px-2 py-2 border rounded-md" />
            </div>

            <div className="col-span-full relative">
              <p className="text-gray-600">{todaysDate.toFormat('EEEE, MMM dd, yyyy')} </p>
              <div>
                <div className="flex">
                  <button onClick={() => { setTodaysDate(todaysDate) }}>
                    <h1 className="text-3xl font-bold mr-4">Today's Games</h1>
                  </button>
                  <button className="bg-gray-50 p-1 w-10 h-10 rounded-full text-gray-500 hover:bg-blue-500 hover:text-gray-50 hover:shadow-lg" onClick={() => { setTodaysDate(todaysDate.plus({ days: -1 })) }}>←</button>
                  <button className="bg-gray-50 p-1 w-10 h-10 rounded-full text-gray-500 hover:bg-blue-500 hover:text-gray-50 hover:shadow-lg" onClick={() => { setTodaysDate(todaysDate.plus({ days: 1 })) }}>→</button>
                </div>
              </div>
            </div>
            <Routes>
              <Route path="/" element={<Dashboard todaysGames={todaysGames} selectedGame={selectedGame} onSetSelectedGame={setSelectedGame} />} />
              {/* <Route path={`/game-stats?gameId=${selectedGame}`} element={<GameStats />} /> */}
              <Route path={`/game-stats/:gameId`} element={<GameStats todaysGames={todaysGames} />} />
            </Routes>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
