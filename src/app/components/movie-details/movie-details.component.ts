import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public id: any;
  movies: any = [];
  votes: any = [];
  imageUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute){
    
  }

  // getMovieById(id: any){
  //   this.moviesService.getMovieById(this.id).subscribe((response => {
  //     this.movies = response
  //     console.log(response)
  //   }))
  // }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getMovieById(this.id);
    });
  }
  
  getMovieById(id: string) {
    this.moviesService.getMovieById(id).subscribe(response => {
      this.movies = response;
      console.log(response);
    });
  }
  
}
