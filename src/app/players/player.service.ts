import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { Player } from './player';

@Injectable()
export class PlayerService {
  private playerUrl = 'http://localhost:3000/api/v1/players';

  constructor(
    private http: Http,
  ) {}

  getPlayers(): Observable<Player[]> {
    return this.http.get(this.playerUrl)
                      .map((response: Response) => <Player[]>response.json())
  }
  getPlayer(id: number){
    return this.http.get(this.playerUrl+"/"+id);
  }
}
