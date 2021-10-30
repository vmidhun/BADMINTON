import { Injectable } from '@angular/core';
import { PlayerService } from './player.service';

export class TOURNAMENT {
  'ID': number;
  'StartTime': string;
  'EndTime' : string;
  'Team1': TEAM;
  'Team2': TEAM;
  'TossWinner': string;
  'Category': string;
  'GameMoves': GAME_MOVES[] ;
}

export class TEAM {
  'TeamName': string;
  'player1_ID': string;
  'player1_Name': string;
  'player2_ID': string;
  'player2_Name': string;
}

export class GAME_MOVES {
  'LeftTopPlayer': string;
  'LeftBottomPlayer': string;
  'RightTopPlayer': string;
  'RightBottomPlayer': string;
  'Team1Score': number;
  'Team2Score': number;
  'ServeBox': string;
}

  let Tournaments: TOURNAMENT[] = [
    {
      ID: 1,
      StartTime: "2013-03-11 11:35:24",
      EndTime: "2013-03-11 11:35:24",
      Team1: {
        'TeamName':"Team A",
        'player1_ID': "string",
        'player1_Name': "string",
        'player2_ID': "string",
        'player2_Name': "string"
      },
      Team2: {
        'TeamName':"Team B",
        'player1_ID': "string",
        'player1_Name': "string",
        'player2_ID': "string",
        'player2_Name': "string"
      },
      TossWinner: "",
      'Category': "Mens Doubles",
      GameMoves: [{
        'LeftTopPlayer': "",
        'LeftBottomPlayer': "",
        'RightTopPlayer': "",
        'RightBottomPlayer': "",
        'Team1Score': 0,
        'Team2Score': 0,
        'ServeBox': "LeftBottom",
      },]
    },
    {
      ID: 2,
      StartTime: "2013-03-11 11:35:24",
      EndTime: "2013-03-11 11:35:24",
      Team1: {
        'TeamName':"Team A",
        'player1_ID': "string",
        'player1_Name': "string",
        'player2_ID': "string",
        'player2_Name': "string"
      },
      Team2: {
        'TeamName':"Team B",
        'player1_ID': "string",
        'player1_Name': "string",
        'player2_ID': "string",
        'player2_Name': "string"
      },
      TossWinner: "",
      'Category': "Mens Doubles",
      GameMoves: [{
        'LeftTopPlayer': "",
        'LeftBottomPlayer': "",
        'RightTopPlayer': "",
        'RightBottomPlayer': "",
        'Team1Score': 0,
        'Team2Score': 0,
        'ServeBox': "",
      },]
    },
  ]
@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  selectedTournament: any
  constructor(private playerService: PlayerService,) { }
  
  getTournament = (ID: any) => {
    var result = Tournaments.find(obj => {return obj.ID === ID})
    this.selectedTournament = result;
    console.log(this.selectedTournament)
    return result;
  }
  getTournaments = () => { return Tournaments }
}
