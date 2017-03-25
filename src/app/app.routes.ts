// Import our dependencies
import { Routes } from '@angular/router';
// import { Home } from './home';
import { LoginComponent } from './login/login.component';
import { SeasonListComponent } from './seasons/season-list/season-list.component';
import { SeasonShowComponent } from './seasons/season-show/season-show.component';
import { AuthGuard } from './common/auth.guard';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'app-season-list', component: SeasonListComponent },
  { path: 'seasons/:id', component: SeasonShowComponent, canActivate: [AuthGuard] },
  { path: '**',     component: LoginComponent },
];
