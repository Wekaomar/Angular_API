import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from "./notfound/notfound.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NavbarComponent, AboutComponent, MoviesComponent, NotfoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_API';
}
