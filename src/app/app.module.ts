import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { GuardService } from './services/auth/guard.service';
import { MovieComponent } from './movie/movie.component';
import { BoxmovieComponent } from './components/boxmovie/boxmovie.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    LoginComponent,
    MovieComponent,
    BoxmovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
