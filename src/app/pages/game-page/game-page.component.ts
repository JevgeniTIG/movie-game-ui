import {Component, OnInit} from '@angular/core';
import {constants} from "../../constants/constants";
import {MovieDTO} from "../../models/MovieDTO";
import {MovieService} from "../../services/movie.service";
import {GuessResponse} from "../../models/GuessResponse";
import {Router} from "@angular/router";


@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  constructor(private movieService: MovieService,
              private router: Router,
              ) {
  }


  movies: MovieDTO [] = [];
  guessResponse = {} as GuessResponse;
  isLoaded = false;
  highScore = 0;
  score = 0;
  userGuessed = false;
  gameStage = 0;

  firstMovieValue = 0;
  secondMovieValue = 0;
  movieValuesSet = false;
  difficultyMode = constants.DIFFICULTY_MODE[Number(localStorage.getItem('difficultySelected'))];
  categoryMode = constants.CATEGORY_MODES[Number(localStorage.getItem('categorySelected'))];


  imageSrc1 = "../../../assets/movie_recorder_primary_white.svg";
  imageSrc2 = "../../../assets/movie_recorder_primary_white.svg";



  ngOnInit(): void {
    this.getMovies(0); // no id on first round
    if (localStorage.getItem('highScore') != undefined) {
      this.highScore = Number(localStorage.getItem('highScore'));
    }

  }

  getMovies(supposedHigherValueMovieId: number) {
    this.movies = [];
    this.movieService.getMoviesForComparison(this.difficultyMode, this.categoryMode, supposedHigherValueMovieId).subscribe(data => {
      this.movies = data;
      this.isLoaded = true;


      this.gameStage = 2;
      this.setMovieValues()

    }, error => {
      this.router.navigate(['/' + constants.SERVER_DOWN])
    })
  }



  getBackGroundColor(): string {
    if (this.difficultyMode === constants.DIFFICULTY_MODE[0]) {
      return '#7DBF97';
    } else {
      return '#00A03F'
    }

  }

  guess(userGuess: number, indexOfMovie: number) {

    this.movieService.guessMovie(this.categoryMode, userGuess, this.movies.find(m => m.id !== userGuess)!.id, indexOfMovie)
      .subscribe(data => {
        this.guessResponse = data;

        if (this.guessResponse.correct) {

          this.gameStage = 1;
          this.setMovieValues();

          setTimeout(() => {
            this.score++;
            if (this.score > this.highScore) {
              this.highScore = this.score;
            }
          }, constants.SHORT_DELAY);


          setTimeout(() => {
            this.getMovies(userGuess)
          }, constants.LONG_DELAY);



        } else {
          this.userGuessed = false;
          this.gameStage = 3;
          this.setMovieValues();
          localStorage.setItem('highScore', this.highScore.toString());
          setTimeout(() => this.router.navigate(['/' + constants.GAME_OVER]), constants.LONG_DELAY);
          this.score = 0;
        }

      }, error => {
        this.router.navigate(['/' + constants.SERVER_DOWN])
      })

  }

  setMovieValues() {
    this.movieValuesSet = true;

    /* user guessed */
    if (this.gameStage === 1 || this.gameStage === 3) {
      if (this.guessResponse.indexOfMovie === 0) {
        this.firstMovieValue = this.guessResponse.supposedHigherValue;
        this.secondMovieValue = this.guessResponse.supposedLowerValue;
      } else if (this.guessResponse.indexOfMovie === 1) {
        this.firstMovieValue = this.guessResponse.supposedLowerValue;
        this.secondMovieValue = this.guessResponse.supposedHigherValue;
      }
    }
    else if (this.gameStage === 2) {
      this.firstMovieValue = this.guessResponse.supposedHigherValue;
    }

  }




  changeImageSrc1(hover: boolean) {
    if (hover) {
      this.imageSrc1 = '../../../assets/movie_recorder_primary_blue.svg'
    } else {
      this.imageSrc1 = '../../../assets/movie_recorder_primary_white.svg'
    }
  }

  changeImageSrc2(hover: boolean) {
    if (hover) {
      this.imageSrc2 = '../../../assets/movie_recorder_secondary_blue.svg'
    } else {
      this.imageSrc2 = '../../../assets/movie_recorder_primary_white.svg'
    }
  }
}
