import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class Service {

  endPoint: {
    baseUrl: 'https://api.themoviedb.org/3/account/20133409';
    apiKey: '6888da0641053ade917886ca8a7fdd72';
  } | undefined;

  constructor() { }


}
