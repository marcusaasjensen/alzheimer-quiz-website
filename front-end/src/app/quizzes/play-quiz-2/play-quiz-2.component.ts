import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quiz } from 'src/models/quiz.model';
import { QuizService } from 'src/services/quiz.service';
import { QUIZ_LIST } from 'src/mocks/quiz-list.mock';
import { Location } from '@angular/common';


@Component({
  selector: 'app-start-quiz',
  templateUrl: './play-quiz-2.component.html',
  styleUrls: ['./play-quiz-2.component.scss']
})
export class PlayQuizComponent2 implements OnInit {

  public score: number = 0;

  public quiz: Quiz;
  public numQuestion: number = 1;
  public answered: boolean = false;
  public isHintUsed: boolean = false;

  constructor(private route: ActivatedRoute, private quizService: QuizService, private location: Location) {
    
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.quiz = QUIZ_LIST[Number(id)-1]
  }

  check(indexAnswer: number): void {
    if (!this.answered) {
      if (this.quiz.questions[this.numQuestion-1].answers[indexAnswer-1].isCorrect) {
          document.getElementById('answer-label').innerHTML = "Bonne réponse";
          this.score++;
          this.quizService.addScore();
          console.log(this.quizService.getScore());
      }
      else {
          document.getElementById('answer-label').innerHTML = "Mauvaise réponse";
      }
      document.getElementById('next-question-button').style.display="block";
      setTimeout(() => {
        this.nextQuestion();
      }, 2*60*1000);
    }
    this.answered = true;
  }

  nextQuestion(): void {
    console.log("OUI");
    document.getElementById('next-question-button').style.display="none"
    if (this.answered) {
      this.numQuestion++;
      if (this.numQuestion > this.quiz.questions.length) {
        document.location.href = '/final-screen/' + this.quiz.id;
      }
      this.update();
    }
  }

  update(): void {
    document.getElementById('answer-label').innerHTML = "";
    let answers = document.getElementsByClassName('answer');
    for (let i = 0; i < answers.length; i++) {
      let img = answers[i] as HTMLImageElement;
      img.src = "/assets/quiz-" + this.quiz.id + "/question-" + this.numQuestion + "/img-" + (i+1) + ".jpg";
    }
    this.answered = false;
    this.isHintUsed = false;
    let hintImg = document.getElementById('hint') as HTMLImageElement;
    hintImg.src = "/assets/hint.png";
    document.getElementById('hint-text').style.color = "green";
    document.getElementById('hint-text').style.color = "black";
  }

  useHint(): void {
    if (!this.isHintUsed && !this.answered) {
      let hintImg = document.getElementById('hint') as HTMLImageElement;
      hintImg.src = "/assets/used-hint.png";
      document.getElementById('hint-text').style.color = "green"
      this.isHintUsed = true;
      this.remove2Images();
    }
  }

  remove2Images(): void {
    let rdmnb1 = Math.floor(Math.random() * 3);
    let rdmnb2 = Math.floor(Math.random() * 3);

    if (rdmnb1 === rdmnb2) {
      rdmnb2++;
      if (rdmnb2 > 2)
        rdmnb2 = 0;
    }
    let answers = document.getElementsByClassName('answer');
    for (let i = 0; i < answers.length; i++) {
      let img = answers[i] as HTMLImageElement;
      if (this.quiz.questions[this.numQuestion-1].answers[i].isCorrect) {
        rdmnb1++;
        rdmnb2++;
      }
      else if (i === rdmnb1 || i === rdmnb2) {
        img.src = "/assets/void.png";
      }
    }
  }
}