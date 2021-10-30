import { Injectable } from '@angular/core';

export class TEAMS {
  'ID': number;
  'TeamName': string;
  'Player1': string;
  'Player2': string;
}

let teams: TEAMS[] = [
  {
    ID: 1,
    TeamName: 'Team A',
    Player1: 'Midhun',
    Player2: 'Anil Gowda',
  },
  {
    ID: 2,
    TeamName: 'Team B',
    Player1: 'Chandru (S)',
    Player2: 'Chandru(H)',
  },
  {
    ID: 3,
    TeamName: 'Team C',
    Player1: 'Navachetan',
    Player2: 'Anil',
  },
  {
    ID: 4,
    TeamName: 'Team D',
    Player1: 'Lova',
    Player2: 'Anil Sreedharan',
  },
];
@Injectable({
  providedIn: 'root'
})
export class TeamService {
  constructor() { }

  getTeams() {
    return teams;
  }

}
