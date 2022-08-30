export type GameType = {
 id: number;
 date: string;
 home_team: TeamDetailsType;
 home_team_score: number;
 period: number;
 postseason: boolean;
 season: number;
 status: string;
 time: string;
 visitor_team: TeamDetailsType;
 visitor_team_score: number;
 data: any
}

export type TeamDetailsType = {
 id: number;
 abbreviation: string;
 city: string;
 conference: string;
 division: string;
 full_name: string | undefined;
 name: string | undefined;
}

export type PlayerType = {
 id: number;
 first_name: string;
 height_feet: number;
 height_inches: number;
 last_name: string;
 position: string;
 team_id: number;
 weight_pounds: number;
}

export type GameStatsType = {
 id: number;
 ast: number;
 blk: number;
 dreb: number;
 fg3_pct: number;
 fg3a: number;
 fg3m: number;
 fg_pct: number;
 fga: number;
 fgm: number;
 ft_pct: number;
 fta: number;
 ftm: number;
 game: GameType;
 min: string;
 oreb: string;
 pf: string;
 player: PlayerType;
 pts: number;
 reb: number;
 stl: number;
 team: TeamDetailsType
 turnover: number
}