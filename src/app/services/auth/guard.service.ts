import {ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class GuardService {
    constructor(private authService: AuthService, private router : Router ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if (this.authService.isAuthenticated()) {
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}