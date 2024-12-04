import { Component, effect, inject, NgModule } from '@angular/core';
import {  MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../shared/data-access/auth.service';
import {  MatIconModule } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    MatButtonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
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
