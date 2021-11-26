import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { union } from 'lodash'
import { teamLogos } from './data';


function App() {

  type ITeam = {
    id: number;
    abbreviation: string;
    city: string;
    conference: string;
    division: string;
    full_name: string;
    name: string;
    img: string;
  }
  const [teams, setTeams] = useState<ITeam[]>([])

  const getTeams = async () => {
    const { data } = await axios.get('https://www.balldontlie.io/api/v1/teams')
    setTeams(data.data)
  }

  const displayLogo = (teamName = 'Raptors'): string | undefined => {
    const logo = teamLogos.find(teamLogo => {
      return teamLogo.name === teamName
    })

    return logo?.src
  }

  useEffect(() => {
    getTeams()
  }, [])

  return (
    <div>
      <h1>Nba Tracker</h1>
      {
        teams && teams.map((team) => (
          <>
            <div>{team.name}</div>
            <img src={displayLogo(team.name)} alt={`${team.name} logo`} style={{ width: '50px' }} />
          </>
        ))
      }
    </div>
  );
}

export default App;
