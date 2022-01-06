import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import StatsTable from '../../components/StatsTable/index'
import TopPerformers from '../../components/TopPerformers'
import { GameStatsType, GameType } from '../../types'
import { displayLogo } from '../../utils'

const GameStats = ({ todaysGames }: { todaysGames: GameType[] }) => {
 let params: any = useParams()
 const [gameStats, setGameStats] = useState<GameStatsType[]>([])
 const [selectedGame, setSelectedGame] = useState(params.gameId)
 const [game, setGame] = useState<GameType>()

 const getGameStats = async () => {
  try {
   const { data } = await axios.get(`https://www.balldontlie.io/api/v1/stats?game_ids[]=${selectedGame}&per_page=100`, {
    headers: { "Access-Control-Allow-Origin": "*" }
   })
   setGameStats(data.data)
  } catch (e) {
   console.error(e)
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

    <div className="col-span-full grid grid-cols-6 gap-4 pt-3">
     <TopPerformers gameStats={gameStats} teamName={game?.home_team.name} />
     <TopPerformers gameStats={gameStats} teamName={game?.visitor_team.name} />
    </div>

    <div className="col-span-full grid grid-cols-6 gap-4 pt-3">
     <div className='overflow-auto col-span-3 border rounded'>
      <StatsTable teamName={game?.home_team.name} gameStats={gameStats} />
     </div>

     <div className='overflow-auto col-span-3 border rounded'>
      <StatsTable teamName={game?.visitor_team.name} gameStats={gameStats} />
     </div>
    </div>
   </div>
  </>
 )
}

export default GameStats