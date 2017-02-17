import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { SeasonListComponent } from './seasons/season-list/season-list.component';

import { SeasonService } from './seasons/season.service';

@NgModule({
  declarations: [
    AppComponent,
    SeasonListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [ SeasonService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
