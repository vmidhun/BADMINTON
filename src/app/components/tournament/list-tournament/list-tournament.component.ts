import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { TournamentService } from 'src/app/services/tournament.service';

@Component({
  selector: 'app-list-tournament',
  templateUrl: './list-tournament.component.html',
  styleUrls: ['./list-tournament.component.css']
})
export class ListTournamentComponent implements OnInit {
  Tournaments: any;
  constructor(private tournamentService:TournamentService) { }

  ngOnInit(): void {
    this.Tournaments = this.tournamentService.getTournaments()
  }
  viewGame = () => { }
  goto =(url: string) => {console.log("url")}

}
