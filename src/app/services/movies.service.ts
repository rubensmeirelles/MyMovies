import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private api: HttpClient){}

  apiKey = '?api_key=6888da0641053ade917886ca8a7fdd72'
  language = '&language=pt-BR'

  getTopRated(){
    return this.api.get<any>(`${environment.urlApi}/movie/top_rated${this.apiKey}&append_to_response=videos
    `)
  }

  getPopulares(){
    return this.api.get<any>(`${environment.urlApi}/movie/popular${this.apiKey}`)
  }

  getUpComing(){
    return this.api.get<any>(`${environment.urlApi}/movie/upcoming${this.apiKey}`)
  }

  getMovieById(movieId: string) {
    return this.api.get<any>(`${environment.urlApi}/movie/${movieId}${this.apiKey}${this.language}`);
  }

  getMovieVideo(movieId: string) {
    return this.api.get<any>(`${environment.urlApi}/movie/${movieId}/videos${this.apiKey}`);
  }

  getMovieCredits(movieId: string) {
    return this.api.get<any>(`${environment.urlApi}/movie/${movieId}/credits${this.apiKey}`);
  }

  searchMovies(data: any): Observable<any> {
    return this.api.get<any>(`${environment.urlApi}/search/movie${this.apiKey}&query=${data.movieName}`)
  }
}
