import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/Services/player.service';
import { ManagerComponent } from '../manager/manager.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  name: string = "";
  playerName: string = "";

  constructor(private playerService: PlayerService, private route: Router) { }

  ngOnInit(): void {
  }

  onCreate() : void {
    this.playerService.CreatePlayer(this.name, this.playerName);
    //this.route.navigate(["/"]);
  }
}
