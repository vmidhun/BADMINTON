import { Injectable } from '@angular/core';


export class PLAYER {
  'ID': number;
  'Name': string;
  'Age': number;
  'Gender': string;
  'Flat': string;
}

  let players: Players[] = [
    {ID: 1, Name: 'Midhun', Age: 41, Gender: "M", Flat: "B4514"},
    {ID: 2, Name: 'Anil', Age: 41, Gender: "M", Flat: "B4514"},
    {ID: 3, Name: 'Chandru', Age: 41, Gender: "M", Flat: "B4514"},
    {ID: 4, Name: 'Chetan', Age: 41, Gender: "M", Flat: "B4514"},
    {ID: 5, Name: 'Aniket', Age: 42, Gender: "M", Flat: "B4514"}];
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  getPlayers() {
    return players;
  }

  addPlayer = (player:PLAYER) => {
    players.push(player)
  }

}
