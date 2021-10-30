import { Component, OnInit } from '@angular/core';
import { PLAYER, PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  constructor(public playersService:PlayerService) { }
  currentPlayer: PLAYER = {ID: 0, Name: '', Age: 0, Sex: "", Flat: ""}
  ngOnInit(): void {

  }

  addPlayer = (e: any) => {
    console.log("clicked", e)
  }
  
// this.playersService.addPlayer = () => {    
//   this.currentPlayer =  

}
