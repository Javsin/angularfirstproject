import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MovieComponent } from './movie/movie.component';
import { GuardService } from './services/auth/guard.service';
const appRoute: Routes = [
    {path:'', component : HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'movie', component: MovieComponent, canActivate: [GuardService]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoute)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
