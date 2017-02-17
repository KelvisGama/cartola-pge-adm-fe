import { Component, OnInit } from '@angular/core';
import { SeasonService } from '../season.service';
import { Observable } from 'rxjs/Rx';
import { Season } from '../season';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.css'],
  providers: [ SeasonService ]
})

export class SeasonListComponent implements OnInit {
  seasons: Season[];
  errorMessage: string;
  mode = "Observable";

  constructor(
    private seasonService: SeasonService
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(() => this.getSeasons());
  }

  getSeasons(){
    this.seasonService.getSeasons()
        .subscribe(
          seasons => this.seasons = seasons,
          error => this.errorMessage = <any>error
        );
  }

}
