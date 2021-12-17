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
}

export type TeamDetailsType = {
 id: number;
 abbreviation: string;
 city: string;
 conference: string;
 division: string;
 full_name: string;
 name: string;
}