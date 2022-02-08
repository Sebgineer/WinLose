import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPlayer } from '../Interfaces/iplayer';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  players: IPlayer[] = [];

  constructor(private httpClient: HttpClient) { }

  GetPlayers(): Observable<IPlayer[]> {
    return this.httpClient.get<IPlayer[]>('./assets/data/players.json');
  }

}


