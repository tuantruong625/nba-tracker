import { Key, ReactChild, ReactFragment, ReactPortal } from "react"

const StatsTable = ({ gameStats, teamName }: { gameStats: any, teamName: any }): JSX.Element => {
 return (
  <table className=" bg-gray-50 border rounded-sm table-auto text-left">
   <thead>
    <tr className='text-sm text-gray-700 font-medium '>
     <th className='p-2 '>Player</th>
     <th className='p-2'>Min</th>
     <th className='p-2'>PTS</th>
     <th className='p-2'>REB</th>
     <th className='p-2'>AST</th>
     <th className='p-2'>FG</th>
     <th className='p-2'>FT</th>
     <th className='p-2'>3PT</th>
     <th className='p-2'>ST</th>
     <th className='p-2'>BLK</th>
     <th className='p-2'>TO</th>
     <th className='p-2'>PF</th>
     <th className='p-2'>OREB</th>
     <th className='p-2'>DREB</th>
     <th className='p-2'>FG%</th>
     <th className='p-2'>FT%</th>
     <th className='p-2'>3PT%</th>
    </tr>
   </thead>
   <tbody>
    {
     gameStats && gameStats.filter((stat: { team: { name: any } }) => stat.team.name === teamName).map((stat: { id: Key | null | undefined; player: { first_name: (boolean | ReactChild | ReactFragment | ReactPortal | null | undefined)[]; last_name: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }; min: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; pts: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; reb: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; ast: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; ftm: {} | null | undefined; fg3m: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; stl: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; blk: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; turnover: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; pf: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; oreb: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; dreb: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; fg_pct: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; ft_pct: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; fg3_pct: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined }) => {
      return (
       <tr key={stat.id} className="text-sm text-gray-700 font-light">
        <td className='p-2'>{stat.player.first_name[0]}.{stat.player.last_name}</td>
        <td className='p-2'>{stat.min}</td>
        <td className='p-2'>{stat.pts}</td>
        <td className='p-2'>{stat.reb}</td>
        <td className='p-2'>{stat.ast}</td>
        <td className='p-2'>{stat.ftm}</td>
        <td className='p-2'>{stat.ftm}</td>
        <td className='p-2'>{stat.fg3m}</td>
        <td className='p-2'>{stat.stl}</td>
        <td className='p-2'>{stat.blk}</td>
        <td className='p-2'>{stat.turnover}</td>
        <td className='p-2'>{stat.pf}</td>
        <td className='p-2'>{stat.oreb}</td>
        <td className='p-2'>{stat.dreb}</td>
        <td className='p-2'>{stat.fg_pct}</td>
        <td className='p-2'>{stat.ft_pct}</td>
        <td className='p-2'>{stat.fg3_pct}</td>
       </tr>
      )
     })
    }
   </tbody>
  </table>
 )
}

export default StatsTable