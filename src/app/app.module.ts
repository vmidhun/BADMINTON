import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { MenubarComponent } from './layouts/menubar/menubar.component';
import { GameComponent } from './components/game/game.component';
import { TeamListComponent } from './components/team/team-list/team-list.component';
import { AddTeamComponent } from './components/team/add-team/add-team.component';
import { AddTournamentComponent } from './components/tournament/add-tournament/add-tournament.component';
import { ListTournamentComponent } from './components/tournament/list-tournament/list-tournament.component';
import { ListPlayersComponent } from './components/players/list-players/list-players.component';
import { ListUsersComponent } from './components/user/list-users/list-users.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';
import { AddPlayerComponent } from './components/players/add-player/add-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenubarComponent,
    GameComponent,
    TeamListComponent,
    AddTeamComponent,
    AddTournamentComponent,
    ListTournamentComponent,
    ListPlayersComponent,
    ListUsersComponent,
    AddUserComponent,
    AddPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
