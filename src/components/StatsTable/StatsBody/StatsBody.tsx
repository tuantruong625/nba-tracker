import { GameStatsType } from "../../../types"

type StatsBodyType = {
 gameStats: GameStatsType[],
 teamName: string | undefined
}

const StatsBody = ({ gameStats, teamName }: StatsBodyType) => {
 return (
  <tbody>
   {
    gameStats && gameStats.filter((stat: { team: { name: any } }) => stat.team.name === teamName).map((stat: GameStatsType) => {
     return (
      <tr key={stat.id} className="text-sm text-gray-700 font-light">
       <td className='p-2'>{stat?.player.first_name[0]}.{stat.player.last_name}</td>
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
       <td className='p-2'>{stat?.fg_pct}</td>
       <td className='p-2'>{stat?.ft_pct}</td>
       <td className='p-2'>{stat?.fg3_pct}</td>
      </tr>
     )
    })
   }
  </tbody>
 )
}

export default StatsBody