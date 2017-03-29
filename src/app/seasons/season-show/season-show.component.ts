import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SeasonService } from '../season.service';
import { Season } from '../season';
import { AuthHttp ,JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';

@Component({
  selector: 'app-season-show',
  templateUrl: './season-show.component.html',
  styleUrls: ['./season-show.component.css'],
  providers: [ SeasonService ]
})
export class SeasonShowComponent implements OnInit {
  jwt: string;
  decodedJwt: string;
  response: string;
  api: string;
  jwtHelper: JwtHelper = new JwtHelper();
  seasonsUrl = 'http://localhost:3000/api/v1/seasons';

  constructor(
    private route: ActivatedRoute,
    private http: Http,
    private seasonService: SeasonService,
    public router: Router,
    public authHttp: AuthHttp

  ) {
    this.jwt = localStorage.getItem('id_token'),
    this.decodedJwt = this.jwtHelper.decodeToken(this.jwt);
  }

  @Input()
  season: Season;

  ngOnInit(): void {

    let seasonRequest = this.route.params.flatMap(
      (params : Params) => this.authHttp.get(this.seasonsUrl+"/"+params['id'])
    );
    seasonRequest.subscribe(response => this.season = response.json());
  }

}
