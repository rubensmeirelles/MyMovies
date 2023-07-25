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
  moreVideos: SafeResourceUrl[] = [];
  videos: any;
  key: any;
  genres: any = [] = [];
  vote_average: any;
  spoken_languages: any = [] = [];
  votes: any = [];
  imageUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
  defaultImageUrl: string = '../../../assets/images/sem-foto.png';
  videoUrl = 'https://www.themoviedb.org/video/play?key=';
  carregando: boolean = false;
  credits: any;
  creditsCrew: any;

  public trailerUrl: any;

  apiKey = '6888da0641053ade917886ca8a7fdd72'

  constructor(private moviesService: MoviesService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer){

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getMovieById(this.id);
      this.getVideo(this.id);
      this.getMoreVideos(this.id);
      this.getMovieCredits(this.id)
    });
  }

  getMovieById(id: string) {
    this.moviesService.getMovieById(id).subscribe(response => {
      this.movie = response;
      this.genres = response.genres;
      this.spoken_languages = response.spoken_languages
      this.vote_average = response.vote_average.toFixed(2)
      console.log(response);
    });
  }

  getVideo(id: string){
    this.moviesService.getMovieVideo(id).subscribe(response => {
      response.results.forEach((element: any) => {
        if(element.type == "Trailer"){
          this.trailerUrl = `https://www.youtube.com/embed/${element.key}`;
          this.movieVideo = this.sanitizer.bypassSecurityTrustResourceUrl(this.trailerUrl);
        }
      });
    })
  }

  getMoreVideos(id: string) {
    this.moviesService.getMovieVideo(id).subscribe(response => {
      response.results.forEach((element: any) => {
        if (element.site == "YouTube") {
          const videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${element.key}`);
          this.moreVideos.push(videoUrl);
        }
      });
      this.moreVideos = this.moreVideos.slice(0, 4);
    });
  }

  getMovieCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe(response => {
      console.log("credits: ", response)
      response.cast.forEach((element: any) => {
        this.credits = response.cast.slice(0, 20)
        this.creditsCrew = response.crew
      });
    })
  }

  getSafeVideoUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.getVideo}`);
    //return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoUrl + this.getVideo);
  }

  handleImageError(event: any) {
    event.target.src = this.defaultImageUrl;
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

