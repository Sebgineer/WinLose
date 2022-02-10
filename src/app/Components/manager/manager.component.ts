import { Component, OnInit } from '@angular/core';
import { IPlayer } from 'src/app/Interfaces/iplayer';
import { PlayerService } from 'src/app/Services/player.service';

/*
  Manager Component Is controlling the hole system.
*/

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  players: IPlayer[] = [];
  playerSelectedPool: IPlayer[] = [];

  constructor(private playerServies: PlayerService) { }

  ngOnInit(): void {
    this.playerServies.GetPlayers().subscribe((data: IPlayer[]) => {
      next: this.players = data;
      console.log(this.players);
      error: console.log("Fail to load players");
    });
  }

  AddPlayerToPool(event: IPlayer): void {
    let bool: boolean = false;
    if (this.playerSelectedPool.length > 0) {
      for (let i = 0; i < this.playerSelectedPool.length; i++) {
        if (this.playerSelectedPool[i] === event && !bool) {
          bool = true;
        }
      }
    }
    
    if (!bool) {
      this.playerSelectedPool.push(event);
    }
  }

  RemovePlayerFromPool(event: IPlayer): void {
    for (let i = 0; i < this.playerSelectedPool.length; i++) {
        if (this.playerSelectedPool[i] === event) {
          this.playerSelectedPool.splice(i, 1);
        }
    }
  }
}
