import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IPlayer } from 'src/app/Interfaces/iplayer';

/*
  List Of Players
*/

@Component({
  selector: 'app-plist',
  templateUrl: './plist.component.html',
  styleUrls: ['./plist.component.css']
})
export class PlistComponent implements OnInit {

  //input to put players in a list
  @Input() players: IPlayer[] = [];
  @Output() PlayerSelected = new EventEmitter<IPlayer>();
  

  constructor() { }

  ngOnInit(): void {
  }

  PlayerClicked(event: any): void {
    console.log(event);
    this.PlayerSelected.emit(event);
  }
}
