import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { LoginModel } from "src/app/model/login.model";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    loggedIn = false;
    
    constructor(private http : HttpClient) { }

    isAuthenticated () : boolean {
        const token = localStorage.getItem('token');
        if (!token) {
          return false;
        }
        return true;
    }

    login(username : string, password : string) {
        const data  = JSON.stringify({username, password})
        return this.http.post<LoginModel>('https://dummyjson.com/auth/login', data, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'  
            })
        });
    }

    logout() {
        this.loggedIn = false;
    }
}