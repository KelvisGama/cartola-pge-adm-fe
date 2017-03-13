// Import our dependencies
import { Routes } from '@angular/router';
// import { Home } from './home';
import { LoginComponent } from './login/login.component';
import { SeasonListComponent } from './seasons/season-list/season-list.component';
// import { Signup } from './signup';
import { AuthGuard } from './common/auth.guard';

// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '',       component: LoginComponent },
  { path: 'login',  component: LoginComponent },
  { path: 'app-season-list', component: SeasonListComponent },
  // { path: 'signup', component: Signup },
  // { path: 'home',   component: Home, canActivate: [AuthGuard] },
  { path: '**',     component: LoginComponent },
];
