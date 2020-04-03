import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Endpoints } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(
    private http: HttpClient
  ) { }

  getMovie(idMovie: string) {
    console.log(Endpoints.urlMovies);
    return this.http.get(Endpoints.urlMovies);
  }
}
