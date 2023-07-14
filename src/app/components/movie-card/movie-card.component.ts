import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit{

  id: any;

  @Input() movies: any;
  @Input() vote: any;
  @Input() imageUrl: string = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  constructor(private moviesService: MoviesService){}

  ngOnInit(): void {
    
  }


  // getMovieById(){
  //   this.moviesService.getMovieById().subscribe((response => {
  //     this.movies = response
  //     console.log(response)
  //   }))
  // }

}
