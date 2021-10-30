import { Injectable } from '@angular/core';


export class PLAYER {
  'ID': number;
  'Name': string;
  'DoB': number;
  'Gender': string;
  'Flat': string;
}

  let players: PLAYER[] = [
    {ID: 1, Name: 'Midhun', DoB: 41, Gender: "M", Flat: "B4514"},
    {ID: 2, Name: 'Anil', DoB: 41, Gender: "M", Flat: "B4514"},
    {ID: 3, Name: 'Chandru', DoB: 41, Gender: "M", Flat: "B4514"},
    {ID: 4, Name: 'Chetan', DoB: 41, Gender: "M", Flat: "B4514"},
    {ID: 5, Name: 'Aniket', DoB: 42, Gender: "M", Flat: "B4514" }
  ];
    
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers() {
    return players;
  }

  addPlayer = (player: PLAYER) => {    
    let id = { 'ID': players.length + 1}  

    let valueToSave = {
      ...player,
      ...id
    }
    players.push(valueToSave)
  }

}
