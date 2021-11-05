import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment } from '../environments/environment';

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
import { ListMatchComponent } from './components/match/list-match/list-match.component';
import { AddMatchComponent } from './components/match/add-match/add-match.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
    AddPlayerComponent,
    ListMatchComponent,
    AddMatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    NgbModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
