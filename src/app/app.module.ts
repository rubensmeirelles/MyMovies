import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MoviesComponent } from './components/movies/movies.component';
import { PopularesComponent } from './components/populares/populares.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { UpcomingComponent } from './components/upcoming/upcoming.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    PopularesComponent,
    NavigationComponent,
    MovieCardComponent,
    UpcomingComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
