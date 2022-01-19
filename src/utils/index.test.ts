import { teamLogos } from '../data';
import { displayLogo } from './index';
describe('utils', () => {
 describe('displayLogo', () => {
  it('returns the correct image src url', () => {
   const result = displayLogo('Hawks')
   
   expect(result).toEqual(teamLogos[0].src)
  })
  
  it('returns Hawks img url if no teamName is provided', () => {
   const result = displayLogo()
   
   expect(result).toEqual(teamLogos[0].src)
  })
 })
})