import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '', redirectTo: "home",pathMatch:"full" },
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"movies",component:MoviesComponent},
    {path:"**",component:NotfoundComponent},
];
