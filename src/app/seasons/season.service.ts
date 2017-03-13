import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Rx';
import { Season } from './season';

@Injectable()
export class SeasonService {
  private seasonsUrl = 'http://localhost:3000/seasons';

  constructor(
    private http: Http,
  ) {}

  getSeasons(): Observable<Season[]> {
    return this.http.get(this.seasonsUrl)
                      .map((response: Response) => <Season[]>response.json())
  }
}
