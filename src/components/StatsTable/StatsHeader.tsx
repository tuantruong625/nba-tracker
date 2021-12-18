const TABLE_HEADERS = [
 'Player',
 'Min',
 'PTS',
 'REB',
 'AST',
 'FG',
 'FT',
 '3PT',
 'ST',
 'BLK',
 'TO',
 'PF',
 'OREB',
 'DREB',
 'FG',
 'FT',
 '3PT',
]

const StatsHeader = () => {
 return (
  <thead>
   <tr className='text-sm text-gray-700 font-medium'>
    {
     TABLE_HEADERS.map(header => {
      return (
       <th className="p-2">{header}</th>
      )
     })
    }
   </tr>
  </thead>
 )
}

export default StatsHeader;

