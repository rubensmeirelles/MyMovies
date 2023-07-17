import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private api: HttpClient){}

  apiKey = '?api_key=6888da0641053ade917886ca8a7fdd72'
  language = '?language=pt-BR'

  getTopRated(){
    return this.api.get<any>(`${environment.urlApi}/top_rated${this.apiKey}`)
  }

  getPopulares(){
    return this.api.get<any>(`${environment.urlApi}/popular${this.apiKey}`)
  }

  getUpComing(){
    return this.api.get<any>(`${environment.urlApi}/upcoming${this.apiKey}`)
  }

  getMovieById(movieId: string) {
    return this.api.get<any>(`${environment.urlApi}/${movieId}${this.apiKey}`);
  }

  getMovieVideo(movieId: string) {
    return this.api.get<any>(`${environment.urlApi}/${movieId}/videos${this.apiKey}`);
  }

}
