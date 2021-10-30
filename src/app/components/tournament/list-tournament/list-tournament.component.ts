import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game.service';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-list-tournament',
  templateUrl: './list-tournament.component.html',
  styleUrls: ['./list-tournament.component.css']
})
export class ListTournamentComponent implements OnInit {
  Tournaments: any;
  constructor(
    private tournamentService: TournamentService,
    public gameService: GameService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.Tournaments = this.tournamentService.getTournaments()
  }
  LoadGame= (ID:number) =>{
    this.gameService.getGame(ID);
    this.router.navigate(['game'])
  }
}
