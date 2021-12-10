import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { DateTime } from 'luxon'
import Dashboard from './pages/dashboard';
import { displayLogo } from './utils';
import { Route, Routes } from 'react-router-dom';

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
  home_team: {};
  home_team_score: 0;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: {};
  visitor_team_score: number
}

function App() {
  const [teams, setTeams] = useState<ITeam[]>([])
  const [todaysGames, setTodaysGames] = useState<any[]>([])
  const [todaysDate, setTodaysDate] = useState(DateTime.now())
  const [gameStats, setGameStats] = useState<any[]>([])
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

  const getGameStats = async (selectedGame: string) => {
    try {
      const { data } = await axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${selectedGame}&per_page=100`)
      setGameStats(data.data)
      setShowGameStats(preValue => !preValue)
      console.log('setting...');
      console.log(data.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getTodaysGame()
  }, [todaysDate, gameStats])

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
              <Route path="/" element={<Dashboard todaysGames={todaysGames} />} />
            </Routes>
          </div>

        </div>
      </div>
      {
        showGameStats && <div className="bg-gray-50 absolute mx-auto top-0 right-0 left-0 bottom-0">
          <button onClick={() => setShowGameStats(preValue => !preValue)}>Close</button>
          {
            gameStats && gameStats.map((game) => (
              <div className="flex">
                <p className="">{game.player.first_name}</p>
                <p className="">{game.player.last_name}</p>
                <p className="">{game.pts}</p>
                <p className="">{game.team.abbreviation}</p>
              </div>
            ))
          }
        </div>
      }
    </div>
  );
}

export default App;
