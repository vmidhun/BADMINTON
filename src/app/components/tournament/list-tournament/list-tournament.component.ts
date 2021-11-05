import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../../../services/match.service';
import { Tournament } from '../../../models/tournament.model'
import { TournamentService } from '../../../services/tournament.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-list-tournament',
  templateUrl: './list-tournament.component.html',
  styleUrls: ['./list-tournament.component.css']
})
export class ListTournamentComponent implements OnInit {
  //

  tournaments?: Tournament[];
  currentTournament?: Tournament;
  currentIndex = -1;
  title = '';

  constructor(
    private tournamentService: TournamentService,
    public matchService: MatchService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.retrieveTournaments();   
  }
  // LoadMatches= (ID:string) =>{
  //   this.matchService.getMatchesByTournament(ID);
  //   this.router.navigate(['matches'])
  // }

  refreshList(): void {
    this.currentTournament = undefined;
    this.currentIndex = -1;
    this.retrieveTournaments();
  }

  retrieveTournaments(): void {
    this.tournamentService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.tournaments = data;
    });
  }

  setActiveTournament(tournament: Tournament, index: number): void {
    this.currentTournament = tournament;
    this.currentIndex = index;
  }

  removeAllTournaments(): void {
    this.tournamentService.deleteAll()
      .then(() => this.refreshList())
      .catch(err => console.log(err));
  }
}
