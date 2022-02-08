import { NgModule,  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './Components/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { PlistComponent } from './Components/plist/plist.component';
import { ProcentPipe } from './Pipes/procent.pipe';
import { PlistPlayerComponent } from './Components/plist-player/plist-player.component';
import { ManagerComponent } from './Components/manager/manager.component';
import { TeamListComponent } from './Components/team-list/team-list.component';
import { PlayerPoolComponent } from './Components/player-pool/player-pool.component';
import { TeamControllerComponent } from './Components/team-controller/team-controller.component';
import { NewPlayerComponent } from './Components/new-player/new-player.component';

export const routes: Routes = [
  { path: '', component: ManagerComponent },
  { path: 'newplayer', component: NewPlayerComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlistComponent,
    ProcentPipe,
    PlistPlayerComponent,
    ManagerComponent,
    TeamListComponent,
    PlayerPoolComponent,
    TeamControllerComponent,
    NewPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
