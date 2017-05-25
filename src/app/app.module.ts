import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { SeasonListComponent } from './seasons/season-list/season-list.component';
import { LoginComponent } from './login/login.component';

import { SeasonService } from './seasons/season.service';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';
import { SeasonShowComponent } from './seasons/season-show/season-show.component';
import { SeasonNewComponent } from './seasons/season-new/season-new.component';
import { PlayerListComponent } from './players/player-list/player-list.component';
import { TeamListComponent } from './teams/team-list/team-list.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

@NgModule({
  declarations: [
    AppComponent,
    SeasonListComponent,
    LoginComponent,
    SeasonShowComponent,
    SeasonNewComponent,
    PlayerListComponent,
    TeamListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    AuthGuard,
    SeasonService,
    {
     provide: AuthHttp,
     useFactory: authHttpServiceFactory,
     deps: [ Http, RequestOptions ]
   }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
