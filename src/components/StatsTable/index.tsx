import { GameStatsType } from "../../types"
import StatsBody from "./StatsBody"
import StatsHeader from "./StatsHeader"

type StatsProps = {
 gameStats: GameStatsType[];
 teamName: string | undefined;
}

const StatsTable = ({ gameStats, teamName }: StatsProps): JSX.Element => {
 return (
  <table className="table-fixed text-left">
   <StatsHeader />
   <StatsBody gameStats={gameStats} teamName={teamName} />
  </table>
 )
}

export default StatsTable