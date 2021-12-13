import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { IGames } from '../../App'
import StatsTable from '../../components/StatsTable'
import { displayLogo } from '../../utils'

const GameStats = ({ todaysGames }: { todaysGames: any[] }) => {
 let params: any = useParams()
 const [gameStats, setGameStats] = useState<any[]>([])
 const [selectedGame, setSelectedGame] = useState(params.gameId)
 const [game, setGame] = useState<IGames>()

 const getGameStats = async () => {
  try {
   const { data } = await axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${selectedGame}&per_page=100`, {
    headers: { "Access-Control-Allow-Origin": "*" }
   })
   setGameStats(data.data)

  } catch (e) {

  }
 }

 const getGame = async () => {
  try {
   const { data } = await axios.get(`https://balldontlie.io/api/v1/games/${selectedGame}`)
   setGame(data.data)
  } catch (e) {

  }
 }

 useEffect(() => {
  getGameStats()
  setGame(todaysGames.find(game => game.id === parseInt(selectedGame)))
 }, [todaysGames, game, selectedGame])

 return (
  <>
   <Link to="/">Back</Link>
   <div className="col-span-full">
    <div className="flex justify-around items-center bg-gray-50 border rounded-sm p-2">
     <div className="flex flex-col items-center flex-1">
      <img src={displayLogo(game?.home_team?.name)} alt={`${game?.home_team.name} logo`} className="w-16" />
      <p className="text-sm pt-1 text-gray-700">{game?.home_team.name}</p>
     </div>
     <div className="flex items-center justify-center flex-1">
      <p className={`text-2xl`}>{game?.home_team_score === 0 ? '-' : game?.home_team_score}</p>
      <p className="text-gray-700 px-6">{game?.status}</p>
      <p className={`text-2xl `}>{game?.visitor_team_score === 0 ? '-' : game?.visitor_team_score}</p>
     </div>
     <div className="flex flex-col items-center p-4 flex-1">
      <img src={displayLogo(game?.visitor_team.name)} alt={`${game?.visitor_team.name} logo`} className="w-16" />
      <p className="text-sm pt-1 text-gray-700">{game?.visitor_team.name}</p>
     </div>
    </div>
    <p className="pt-3 text-lg text-gray-800">
     Top Performers
    </p>

    <div className="col-span-full grid grid-cols-6 gap-4 pt-3 ">
     <div className="col-span-3 bg-gray-50 p-4 flex items-center border rounded-sm">
      <p className="text-lg text-gray-700">Fred Van Fleet</p>
      <span className="px-4 text-xl text-gray-400">|</span>
      <p className="px-2">
       <span className="text-gray-700 text-lg">18</span>
       <span className="text-gray-600 text-xs">PTS</span>
      </p>
      <p className="px-2">
       <span className="text-gray-700 text-lg">8</span>
       <span className="text-gray-600 text-xs">REB</span>
      </p>
      <p className="px-2">
       <span className="text-gray-700 text-lg">2</span>
       <span className="text-gray-600 text-xs">AST</span>
      </p>
      <p className="px-2">
       <span className="text-gray-700 text-lg">1</span>
       <span className="text-gray-600 text-xs">BLK</span>
      </p>
     </div>

     <div className="col-span-3 bg-gray-50">
      <div className="col-span-3 bg-gray-50 p-4 flex items-center border rounded-sm">
       <p className="text-lg text-gray-700">Fred Van Fleet</p>
       <span className="px-4 text-xl text-gray-400">|</span>
       <p className="px-2">
        <span className="text-gray-700 text-lg">18</span>
        <span className="text-gray-600 text-xs">PTS</span>
       </p>
       <p className="px-2">
        <span className="text-gray-700 text-lg">8</span>
        <span className="text-gray-600 text-xs">REB</span>
       </p>
       <p className="px-2">
        <span className="text-gray-700 text-lg">2</span>
        <span className="text-gray-600 text-xs">AST</span>
       </p>
       <p className="px-2">
        <span className="text-gray-700 text-lg">1</span>
        <span className="text-gray-600 text-xs">BLK</span>
       </p>
      </div>
     </div>
    </div>

    <div className="col-span-full grid grid-cols-6 gap-4 pt-3">
     <div className='overflow-auto col-span-3'>
      <StatsTable teamName={game?.home_team.name} gameStats={gameStats} />
     </div>

     <div className='overflow-auto col-span-3'>
      <StatsTable teamName={game?.visitor_team.name} gameStats={gameStats} />
     </div>
    </div>
   </div>
  </>
 )
}

export default GameStats