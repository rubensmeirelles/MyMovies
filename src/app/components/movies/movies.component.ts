import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: any = [];
  imageUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

  constructor( private moviesService: MoviesService) { }

  ngOnInit() {
    this.getTopRated();
  }

  getTopRated(){
    this.moviesService.getTopRated().subscribe((response => {
      this.movies = response;
    }))
  }
}
