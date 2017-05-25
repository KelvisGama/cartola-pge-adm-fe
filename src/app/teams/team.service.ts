import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { Team } from './team';

@Injectable()
export class TeamService {
  private teamsUrl = 'http://localhost:3000/api/v1/teams';

  constructor(
    private http: Http,
  ) {}

  getTeams(): Observable<Team[]> {
    return this.http.get(this.teamsUrl)
                      .map((response: Response) => <Team[]>response.json())
  }
  getTeam(id: number){
    return this.http.get(this.teamsUrl+"/"+id);
  }
}
