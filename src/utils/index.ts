import { teamLogos } from '../data';

export const displayLogo = (teamName = 'Hawks'): string | undefined => {
 const logo = teamLogos.find(teamLogo => {
   return teamLogo.name === teamName
 })

 return logo?.src
}