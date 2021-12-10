
import { displayLogo } from "../../utils"

type GameProps = {
 todaysGames: any[]
}

const Games = ({ todaysGames }: GameProps): JSX.Element => {
 return <>
  {
   todaysGames.map(game => (
    <div className="col-span-6" key={game.id}>
     <div className="flex justify-around items-center bg-gray-50 border rounded-sm p-2" onClick={() => getGameStats(game.id)}>
      <div className="flex flex-col items-center flex-1">
       <img src={displayLogo(game.home_team.name)} alt={`${game.home_team.name} logo`} className="w-16" />
       <p className="text-sm pt-1 text-gray-700">{game.home_team.name}</p>
      </div>
      <div className="flex items-center justify-center flex-1">
       <p className={`text-2xl ${game.home_team_score > game.visitor_team_score ? 'text-green-500' : 'text-gray-800'}`}>{game.home_team_score === 0 ? '-' : game.home_team_score}</p>
       <p className="text-gray-700 px-6">{game.status}</p>
       <p className={`text-2xl ${game.visitor_team_score > game.home_team_score ? 'text-green-500' : 'text-gray-800'}`}>{game.visitor_team_score === 0 ? '-' : game.visitor_team_score}</p>
      </div>
      <div className="flex flex-col items-center p-4 flex-1">
       <img src={displayLogo(game.visitor_team.name)} alt={`${game.visitor_team.name} logo`} className="w-16" />
       <p className="text-sm pt-1 text-gray-700">{game.visitor_team.name}</p>
      </div>
     </div>
    </div>
   ))
  }
 </>
}








export default Games

function getGameStats(id: string): void {
 throw new Error("Function not implemented.")
}

