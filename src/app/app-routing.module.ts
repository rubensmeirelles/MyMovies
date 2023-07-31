import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { PopularesComponent } from './components/populares/populares.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { SearchMovieComponent } from './components/searchMovie/searchMovie.component';

const routes: Routes = [
  { path: '', redirectTo: 'movies', pathMatch: 'full'},
  { path: 'movies', component: MoviesComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'populares', component: PopularesComponent },
  { path: 'coming', component: UpcomingComponent },
  { path: 'search', component: SearchMovieComponent },
  { path: '**', component: MoviesComponent },
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
