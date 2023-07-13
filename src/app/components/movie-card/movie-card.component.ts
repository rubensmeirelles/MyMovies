import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
  @Input() movies: any;
  @Input() vote: any;
  @Input() imageUrl: string = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

}
