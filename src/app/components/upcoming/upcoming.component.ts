import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit{

  movies: any = [];
  votes: any = [];
  imageUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face'

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getUpComing();
  }

  getUpComing(){
    this.moviesService.getUpComing().subscribe((response => {
      this.movies = response
    }))
  }

}
