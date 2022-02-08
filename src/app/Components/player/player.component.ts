import { Component, OnInit, Input } from '@angular/core';
import { IPlayer } from 'src/app/Interfaces/iplayer';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: IPlayer = {lose: 0, win: 0,name: "unknown", playerName: "unknown" };

  constructor() { }

  ngOnInit(): void {
  }

}
