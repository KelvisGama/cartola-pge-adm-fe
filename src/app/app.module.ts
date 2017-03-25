import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { AppComponent } from './app.component';
import { SeasonListComponent } from './seasons/season-list/season-list.component';
import { LoginComponent } from './login/login.component';

import { SeasonService } from './seasons/season.service';
import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';
import { SeasonShowComponent } from './seasons/season-show/season-show.component';


@NgModule({
  declarations: [
    AppComponent,
    SeasonListComponent,
    LoginComponent,
    SeasonShowComponent,
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
    ...AUTH_PROVIDERS,
    SeasonService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
