import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-populares',
  templateUrl: './populares.component.html',
  styleUrls: ['./populares.component.css']
})
export class PopularesComponent implements OnInit {

  movies: any = [];
  imageUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'


  constructor( private moviesService: MoviesService) { }

  ngOnInit() {
    this.getPopulares();
  }

  getPopulares(){
    this.moviesService.getPopulares().subscribe((response => {
      this.movies = response;
      console.log("Filmes: ",this.movies.results)
    }))
  }

}
