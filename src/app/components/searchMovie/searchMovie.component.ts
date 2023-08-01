import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-searchMovie',
  templateUrl: './searchMovie.component.html',
  styleUrls: ['./searchMovie.component.css']
})
export class SearchMovieComponent implements OnInit {

  imageUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
  DialogElementsExampleDialog: any;
  searchResult: any;
  searchForm: FormGroup<{ movieName: FormControl<string | null>; }>;

  constructor(private moviesService: MoviesService, private formBuilder: FormBuilder, public dialog: MatDialog) {
    this.searchForm = this.formBuilder.group({
      movieName: ['', Validators.required], // Exemplo de campo obrigatório
      // Outros campos do formulário
    });
   }

  ngOnInit() {
  }

  submitForm(){
    console.log(this.searchForm.value)
    if (this.searchForm.invalid) {
      this.openDialog();
      return;
    }
    this.moviesService.searchMovies(this.searchForm.value).subscribe((response => {
      this.searchResult = response.results
    }))
  }

  openDialog() {
    this.dialog.open(this.DialogElementsExampleDialog);
  }
}
