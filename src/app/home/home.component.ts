import { Component, effect, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../shared/data-access/auth.service';
import { Router } from '@angular/router';
import { SolarSystemComponent } from "../solar-system/solar-system.component";

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  selector: 'app-home',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    SolarSystemComponent
],
  
})
export default class HomeComponent {
  authService = inject(AuthService);
  private router = inject(Router);

  constructor() {
    effect(() => {
      if (!this.authService.user()) {
        this.router.navigate(['auth', 'login']);
      }
    });
  }
}
