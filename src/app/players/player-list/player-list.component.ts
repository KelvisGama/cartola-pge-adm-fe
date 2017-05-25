import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Player } from '../player';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css'],
  providers: [ PlayerService ]
})
export class PlayerListComponent implements OnInit {
  players: Player[];
  errorMessage: string;
  mode = "Observable";
  token = localStorage.getItem('id_token');

  constructor(
    private playerService: PlayerService,
    private router: Router
  ){}

  ngOnInit() {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(() => this.getPlayers());
  }

  getPlayers(){
    this.playerService.getPlayers()
        .subscribe(
          players => this.players = players,
          error => this.errorMessage = <any>error
        );
  }

}
