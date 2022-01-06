import { useEffect, useState } from "react"
import { GameStatsType, PlayerType } from "../../types"

type TopPerformersType = {
 gameStats: GameStatsType[],
 teamName: string | undefined
}

const TopPerformers = ({ gameStats, teamName }: TopPerformersType) => {
 const [topPlayer, setTopPlayer] = useState<any>()

 useEffect(() => {
  if (gameStats) {
   setTopPlayer(gameStats.filter((team: { team: { name: any } }) => team.team.name === teamName).sort((a: { pts: number; }, b: { pts: number; }) => b.pts - a.pts)[0])
  }
 }, [topPlayer, gameStats])

 return (
  <div className="col-span-3 bg-gray-50">
   <div className="col-span-3 bg-gray-50 p-4 flex items-center border rounded-sm">
    <p className="text-lg text-gray-700">{topPlayer?.player.first_name} {topPlayer?.player.last_name}</p>
    <span className="px-4 text-xl text-gray-400">|</span>
    <p className="px-2">
     <span className="text-gray-700 text-lg">{topPlayer?.pts}</span>
     <span className="text-gray-600 text-xs">PTS</span>
    </p>
    <p className="px-2">
     <span className="text-gray-700 text-lg">{topPlayer?.reb}</span>
     <span className="text-gray-600 text-xs">REB</span>
    </p>
    <p className="px-2">
     <span className="text-gray-700 text-lg">{topPlayer?.ast}</span>
     <span className="text-gray-600 text-xs">AST</span>
    </p>
    <p className="px-2">
     <span className="text-gray-700 text-lg">{topPlayer?.blk}</span>
     <span className="text-gray-600 text-xs">BLK</span>
    </p>
   </div>
  </div>
 )
}

export default TopPerformers