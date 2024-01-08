import { useState } from "react"
import PlayerStats from "../../../pages/playerStats"
import { GameStatsType } from "../../../types"

type StatsBodyType = {
 gameStats: GameStatsType[],
 teamName: string | undefined
}

const StatsBody = ({ gameStats, teamName }: StatsBodyType) => {
  const [showPlayerStats, setShowPlayerStats] = useState(false)
  const [selectedPlayer, setSelectedPlayer] = useState<number | undefined>()
  const transformStatToPercentage = (stat: number) => {
    return (stat * 100).toFixed(0).toString() + '%'
  }

  const handlePlayerStats = (playerId: number) => {
    setSelectedPlayer(playerId)
    setShowPlayerStats(true)
  }

  const getPlayerStats = (playerId: number | undefined) => {
    return gameStats.find((stat: GameStatsType) => stat.player.id === playerId)
  }

 return (
   <tbody>
     {
       showPlayerStats ? <PlayerStats showPlayerStats={showPlayerStats} setShowPlayerStats={setShowPlayerStats} selectedPlayer={getPlayerStats(selectedPlayer)} /> : null
     }
   {
       gameStats && gameStats.filter((stat: { team: { name: any } }) => stat.team.name === teamName).map((stat: GameStatsType) => {
     return (
       <tr key={stat.id} className="text-sm text-gray-700 font-light">
       <td className='p-2 cursor-pointer hover:underline' onClick={() => handlePlayerStats(stat.player.id)}>{stat?.player?.first_name[0]}.{stat?.player?.last_name}</td>
       <td className='p-2'>{stat?.min}</td>
       <td className='p-2'>{stat?.pts}</td>
       <td className='p-2'>{stat?.reb}</td>
       <td className='p-2'>{stat?.ast}</td>
       <td className='p-2'>{stat?.ftm}</td>
       <td className='p-2'>{stat?.ftm}</td>
       <td className='p-2'>{stat?.fg3m}</td>
       <td className='p-2'>{stat?.stl}</td>
       <td className='p-2'>{stat?.blk}</td>
       <td className='p-2'>{stat?.turnover}</td>
       <td className='p-2'>{stat?.pf}</td>
       <td className='p-2'>{stat?.oreb}</td>
       <td className='p-2'>{stat?.dreb}</td>
       <td className='p-2'>{transformStatToPercentage(stat?.fg_pct)}</td>
       <td className='p-2'>{transformStatToPercentage(stat?.ft_pct)}</td>
       <td className='p-2'>{transformStatToPercentage(stat?.fg3_pct)}</td>
      </tr>
     )
    })
   }
  </tbody>
 )
}

export default StatsBody