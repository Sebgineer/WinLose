import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlayer } from '../Interfaces/iplayer';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: IPlayer[] = [];
  path: string = "http://localhost:3000/players";

  constructor(private httpClient: HttpClient) { }

  GetPlayers(): Observable<IPlayer[]> {
    return this.httpClient.get<IPlayer[]>(this.path);
  }

  CreatePlayer(name: string, username: string) : boolean {
    let bool = true;
    this.GetPlayers().subscribe((data: IPlayer[]) => {
      next: {
        this.players = data,        
        this.players.forEach(player => {
          if (player.playerName == username) {
            bool = false;
          }
        });
        let newPlayer: IPlayer = {name: name, playerName: username, win: 0, lose: 0}
        this.players.push(newPlayer);
        this.httpClient.post<IPlayer>(this.path,
          {
            name: name,
            playerName: username,
            win: 0,
            lose: 0
          });
        console.log(this.players);
      }
      error: (err: Error) => {
        console.error("Fail to load content");
        return false; 
      }
    });
    return bool;
  }
}


