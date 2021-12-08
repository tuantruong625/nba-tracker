import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { DateTime } from 'luxon'
import Games from './components/Games';
import { displayLogo } from './utils';

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

            <div className="col-span-full">
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
            {
              todaysGames && todaysGames.map(({ home_team, home_team_score, visitor_team, visitor_team_score, status, id }) => (
                <div className="col-span-6" key={id}>
                  <div className="flex justify-around items-center bg-gray-50 border rounded-sm p-2">
                    <div className="flex flex-col items-center flex-1">
                      <img src={displayLogo(home_team.name)} alt={`${home_team.name} logo`} className="w-16" />
                      <p className="text-sm pt-1 text-gray-700">{home_team.name}</p>
                    </div>
                    <div className="flex items-center justify-center flex-1">
                      <p className={`text-2xl ${home_team_score > visitor_team_score ? 'text-green-500' : 'text-gray-800'}`}>{home_team_score === 0 ? '-' : home_team_score}</p>
                      <p className="text-gray-700 px-6">{status}</p>
                      <p className={`text-2xl ${visitor_team_score > home_team_score ? 'text-green-500' : 'text-gray-800'}`}>{visitor_team_score === 0 ? '-' : visitor_team_score}</p>
                    </div>
                    <div className="flex flex-col items-center p-4 flex-1">
                      <img src={displayLogo(visitor_team.name)} alt={`${visitor_team.name} logo`} className="w-16" />
                      <p className="text-sm pt-1 text-gray-700">{visitor_team.name}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
