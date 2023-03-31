import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isNavbarAbsolute = true;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (window.pageYOffset > 50) {
      this.isNavbarAbsolute = false;
    } else {
      this.isNavbarAbsolute = true;
    }
  }
}
