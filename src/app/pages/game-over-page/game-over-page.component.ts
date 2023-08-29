import { Component } from '@angular/core';

@Component({
  selector: 'app-game-over-page',
  templateUrl: './game-over-page.component.html',
  styleUrls: ['./game-over-page.component.scss']
})
export class GameOverPageComponent {


  textForOutput = 'Game Over!';
  buttonText = 'REPEAT';
  imageSrc = './assets/movie_film.svg';
  pageIndex = 1;

  constructor() {
  }

}
