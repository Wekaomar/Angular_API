import { Component } from '@angular/core';
import { DataService  } from '../data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [HttpClientModule],
  providers:[DataService],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  datalist: any[] = [];
  trendingMovies: any;
    constructor(private _DataService: DataService) {
  
      this._DataService.getdata().subscribe((data) => {
        this.datalist = data.results
        console.log(this.datalist)
      })
    }

}
