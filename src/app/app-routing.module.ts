import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: '', component: MoviesComponent }
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
