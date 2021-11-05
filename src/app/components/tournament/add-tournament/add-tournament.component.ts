import { Component, OnInit } from '@angular/core';
import { Tournament } from '../../../models/tournament.model'
import { TournamentService } from '../../../services/tournament.service';

@Component({
  selector: 'app-add-tournament',
  templateUrl: './add-tournament.component.html',
  styleUrls: ['./add-tournament.component.css']
})
export class AddTournamentComponent implements OnInit {
  tournament: Tournament = new Tournament();
  
  submitted = false;

  constructor(private tournamentService: TournamentService) { }

  ngOnInit(): void {
  }

  saveTournament(): void {
    this.tournamentService.create(this.tournament).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newTournament(): void {
    this.submitted = false;
    this.tournament = new Tournament();
  }
}
