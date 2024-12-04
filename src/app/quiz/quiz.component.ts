import { Component, effect, inject } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../shared/data-access/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    NgFor,
    NgIf
  ],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
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

  quizzes: { [key: string]: Quiz } = {
    milkyWay: {
      title: 'Milky Way Quiz',
      questions: [
        {
          question: 'What type of galaxy is the Milky Way?',
          options: ['Spiral', 'Elliptical', 'Irregular', 'Lenticular'],
          correctAnswer: 0
        },
        {
          question: 'How many stars does the Milky Way approximately contain?',
          options: ['100 million', '100 billion', '1 trillion', '10 billion'],
          correctAnswer: 1
        },
        {
          question: 'What is at the center of the Milky Way?',
          options: ['A giant star', 'A black hole', 'A supernova', 'Dark matter'],
          correctAnswer: 1
        }
      ]
    },
    plants: {
      title: 'Plant Quiz',
      questions: [
        {
          question: 'What process do plants use to convert sunlight into energy?',
          options: ['Photosynthesis', 'Respiration', 'Osmosis', 'Transpiration'],
          correctAnswer: 0
        },
        {
          question: 'Which part of the plant is responsible for photosynthesis?',
          options: ['Roots', 'Stem', 'Leaves', 'Flowers'],
          correctAnswer: 2
        },
        {
          question: 'What is the main gas absorbed by plants during photosynthesis?',
          options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
          correctAnswer: 1
        }
      ]
    }
  };

  // Active quiz and state management
  currentQuiz: Quiz = this.quizzes['milkyWay']; // Default quiz
  currentQuestionIndex = 0;
  score = 0;
  showResults = false;
  userAnswer: number | null = null;

  // Function to switch between quizzes
  switchQuiz(quizKey: string) {
    this.currentQuiz = this.quizzes[quizKey]; // Access using bracket notation
    this.restartQuiz(); // Restart when switching quizzes
  }

  selectAnswer(index: number) {
    this.userAnswer = index;
  }

  submitAnswer() {
    if (this.userAnswer !== null) {
      if (this.userAnswer === this.currentQuiz.questions[this.currentQuestionIndex].correctAnswer) {
        this.score++;
      }

      this.userAnswer = null; // Reset for the next question

      if (this.currentQuestionIndex < this.currentQuiz.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.showResults = true;
      }
    }
  }

  restartQuiz() {
    this.currentQuestionIndex = 0;
    this.score = 0;
    this.showResults = false;
    this.userAnswer = null;
  }
}
