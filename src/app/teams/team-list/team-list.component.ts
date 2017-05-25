import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Team } from '../team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
  providers: [ TeamService ]
})
export class TeamListComponent implements OnInit {
  teams: Team[];
  errorMessage: string;
  mode = "Observable";
  token = localStorage.getItem('id_token');

  constructor(
    private teamService: TeamService,
    private router: Router
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(() => this.getTeams());
  }

  getTeams(){
    this.teamService.getTeams()
        .subscribe(
          teams => this.teams = teams,
          error => this.errorMessage = <any>error
        );
  }

  goToShow(team: Team): void {
    let link = ['/teams', team.id];
    this.router.navigate(link);
  }

}
