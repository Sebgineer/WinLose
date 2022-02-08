import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPlayer } from 'src/app/Interfaces/iplayer';

@Component({
  selector: 'app-plist-player',
  templateUrl: './plist-player.component.html',
  styleUrls: ['./plist-player.component.css']
})
export class PlistPlayerComponent implements OnInit {

  @Input() player: IPlayer = {name: "", playerName: "", win: 0, lose: 0};
  @Output() PlayerSelected = new EventEmitter<IPlayer>();
  
  constructor() { }

  ngOnInit(): void {
  }

  PlayerClicked(event: Event): void {
    this.PlayerSelected.emit(this.player);
  }
}
