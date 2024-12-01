import { Routes } from '@angular/router';
import { isAuthenticatedGuard } from './shared/guards/auth.guard';
import { PlanetspageComponent } from './planetspage/planetspage.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'home',
    canActivate: [isAuthenticatedGuard()],
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path:'planetspage',
    component:PlanetspageComponent
  },
  { path: 'planets/:name', component: PlanetspageComponent },
];
