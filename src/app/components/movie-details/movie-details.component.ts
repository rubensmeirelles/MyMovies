import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public id: any;
  movie: any = [];
  movieVideo: any;
  key: any;
  genres: any = [] = [];
  vote_average: any;
  spoken_languages: any = [] = [];
  votes: any = [];
  imageUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
  videoUrl = 'https://www.themoviedb.org/video/play?key='

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer){

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getMovieById(this.id);
      this.getVideo(this.id)
    });
  }

  getMovieById(id: string) {
    this.moviesService.getMovieById(id).subscribe(response => {
      this.movie = response;
      this.genres = response.genres;
      this.spoken_languages = response.spoken_languages
      this.vote_average = response.vote_average.toFixed(2)
      console.log("idiomas: ", this.spoken_languages[0]);
      console.log(response);
    });
  }

  getVideo(id: string){
    this.moviesService.getMovieVideo(id).subscribe(response => {
      console.log("videos: ", response)
      response.results.forEach((element: any) => {
        if(element.type == "Trailer"){
          this.getVideo = element.key

        }
      });
    })
  }

  getSafeVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl + this.getVideo);
  }


  formatGenres(genres: any[]): string {
    return genres.map(genero => genero.name).join(' | ');
  }

  formatLanguages(spoken_languages: any[]) {
    return spoken_languages.map(languages => languages.english_name).join(' | ')
  }

  getYear(release_date: any){
    const date = new Date(release_date);
    return date.getFullYear();
  }
}

