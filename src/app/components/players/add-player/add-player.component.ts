import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PLAYER, PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(
    public playersService: PlayerService,
    private router: Router
    ) { }
  
  currentPlayer: PLAYER = { ID: 0, Name: '', DoB: 0, Gender: "", Flat: "" }
  
  ngOnInit(): void {

  }

  addPlayer = () => {
    this.playersService.addPlayer(this.currentPlayer);
    this.router.navigate(['players'])
  }

}
