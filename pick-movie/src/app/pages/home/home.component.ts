import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public tmdbService: TmdbService
  ) { }

  ngOnInit() {
    this.tmdbService.getMovie('550')
      .subscribe(
        response => {
          console.log(response);
        }
      )
  }

}
