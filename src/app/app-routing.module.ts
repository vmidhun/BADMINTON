import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { ListPlayersComponent } from './components/players/list-players/list-players.component';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { AddTeamComponent } from './components/team/add-team/add-team.component';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { GameComponent } from './components/game/game.component';
import { ListTournamentComponent } from './components/tournament/list-tournament/list-tournament.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'players', component: ListPlayersComponent },
  { path: 'player/add', component: AddPlayerComponent },
  { path: 'teams', component: TeamListComponent },
  { path: 'team/add', component: AddTeamComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'user/add', component: ListUsersComponent },
  { path: 'game', component: GameComponent },
  { path: 'tournament', component: ListTournamentComponent},  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,CommonModule]
})
export class AppRoutingModule { }
