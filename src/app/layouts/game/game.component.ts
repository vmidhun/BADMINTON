import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  gamePlayers: any;
  isActive: boolean = false;

  leftTop: any = {};
  leftBot: any = {};
  rightTop: any = {};
  rightBot: any = {};

  TeamLeftScore: number = 0
  TeamRightScore:number = 0

  constructor( public currentGame: GameService) { }

  ngOnInit(): void {
    this.gamePlayers = this.currentGame.getPlayers();
    this.leftTop['player'] = this.gamePlayers[0].Name;
    this.leftBot['player'] = this.gamePlayers[1].Name;
    this.rightTop['player'] = this.gamePlayers[2].Name;
    this.rightBot['player'] = this.gamePlayers[3].Name;    
  }

  setGround = () => {
    this.leftTop['class'] = false;
    this.leftBot['class'] = false;
    this.rightTop['class'] = false;
    this.rightBot['class'] = false;     
  };

  leftClicked = () => {this.TeamLeftScore++ }
  rightClicked = () => {this.TeamRightScore++}

}
