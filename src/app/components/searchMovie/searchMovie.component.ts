import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-searchMovie',
  templateUrl: './searchMovie.component.html',
  styleUrls: ['./searchMovie.component.css']
})
export class SearchMovieComponent implements OnInit {

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
  }

  searchResult: any;

  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  })

  submitForm(){
    console.log("movie: ",this.searchForm.value)
    this.moviesService.searchMovies(this.searchForm.value).subscribe((response => {
      this.searchResult = response.results
      console.log("movie: ", this.searchResult)
    }))
  }

}
