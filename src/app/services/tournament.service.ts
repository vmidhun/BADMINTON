import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Tournament } from '../models/tournament.model'


// export class TOURNAMENT {
//   'ID': string;
//   'UserID': string;
//   'TournamentName': string;
// }

// let Tournaments: TOURNAMENT[] = [
//   {
//     ID: "1",
//     UserID: "1",
//     TournamentName: "Phoneix Cup",
//    },
//    {
//     ID: "2",
//     UserID: "2",
//     TournamentName: "Boston Cup",
//    }, 
// ]
@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  selectedTournament: any
  tournamentsByUser: any;
 
  private dbPath = '/tournaments';

  Tournaments: AngularFireList<Tournament>;

  constructor(private db: AngularFireDatabase) {
    this.Tournaments = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Tournament> {
    return this.Tournaments;
  }

  create(tournament: Tournament): any {
    return this.Tournaments.push(tournament);
  }

  update(key: string, value: any): Promise<void> {
    return this.Tournaments.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.Tournaments.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.Tournaments.remove();
  }

   // getTournamentsByUserID = (ID: any) => {
  //   var result = Tournaments.forEach(obj => {
  //     if (obj.UserID === ID) {
  //       this.tournamentsByUser.push(obj)
  //     }
  //   })
  //   this.selectedTournament = result;
  //   console.log(this.selectedTournament)
  //   return result;
  // }
  //getTournaments = () => { return Tournaments }

}
