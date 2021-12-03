import { IGames } from "../../App"
import { displayLogo } from "../../utils"

const Games = () => (
 <div>hi</div>



 // todaysGames && todaysGames.map(({ home_team, home_team_score, visitor_team, visitor_team_score, status }) => (
 //  <div className="col-span-6">
 //   <div className="flex justify-around items-center bg-gray-50 border rounded-sm p-2">
 //    <div className="flex flex-col items-center flex-1">
 //     <img src={displayLogo(home_team.name)} alt={`${home_team.name} logo`} style={{ width: '50px' }} />
 //     <p>{home_team.name}</p>
 //    </div>
 //    <div className="flex items-center justify-center flex-1">
 //     <p className="text-2xl text-gray-800">{home_team_score === 0 ? '-' : home_team_score}</p>
 //     <p className="text-gray-700 px-6">{status}</p>
 //     <p className="text-2xl text-gray-800">{visitor_team_score === 0 ? '-' : visitor_team_score}</p>
 //    </div>
 //    <div className="flex flex-col items-center p-4 flex-1">
 //     <img src={displayLogo(visitor_team.name)} alt={`${visitor_team.name} logo`} style={{ width: '50px' }} />
 //     <p>{visitor_team.name}</p>
 //    </div>
 //   </div>
 //  </div>
 // ))
)

export default Games