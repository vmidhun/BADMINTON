import { Injectable } from '@angular/core';

export class Players {
  'ID': number;
  'Name': string;
}

let players: Players[] = [
  {
    ID: 1,
    Name: 'Midhun',
  },
  {
    ID: 2,
    Name: 'Anil',
  },
  {
    ID: 3,
    Name: 'Chandru',
  },
  {
    ID: 4,
    Name: 'Chetan',
  },
];

@Injectable({
  providedIn: 'root',
})
export class GameService {
  currentGame: any;
  constructor() {}

  getPlayers() {
    return players;
  }
}
