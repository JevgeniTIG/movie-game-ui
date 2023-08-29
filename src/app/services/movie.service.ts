import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {MovieDTO} from "../models/MovieDTO";
import {environment} from "../../environments/environment";
import {GuessResponse} from "../models/GuessResponse";

const APP_API = environment.host + '/api/v1'

const MOVIE_GAME_API = APP_API + '/movie-game';
const MOVIE_GAME_GET_TWO_MOVIES_FOR_COMPARISON_API = MOVIE_GAME_API + '/two-movies-for-comparison'
const GUESS_API = MOVIE_GAME_API + '/guess'


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) {
  }

  getMoviesForComparison(difficultyMode: string, categoryMode: string, movieWithHigherValueId: number): Observable<MovieDTO[]> {

    const params = new HttpParams()
      .set('difficultyMode', difficultyMode)
      .set('categoryMode', categoryMode)
      .set('movieWithHigherValueId', movieWithHigherValueId)

    return this.http.get<MovieDTO[]>(MOVIE_GAME_GET_TWO_MOVIES_FOR_COMPARISON_API, {params})
  }

  guessMovie(categoryMode: string, supposedHigherValueMovieId: number, supposedLowerValueMovieId: number, indexOfMovie: number): Observable<GuessResponse> {

    const params = new HttpParams()
      .set('categoryMode', categoryMode)
      .set('supposedHigherValueMovieId', supposedHigherValueMovieId)
      .set('supposedLowerValueMovieId', supposedLowerValueMovieId)
      .set('indexOfMovie', indexOfMovie)


    return this.http.get<GuessResponse>(GUESS_API, {params})
  }


}
