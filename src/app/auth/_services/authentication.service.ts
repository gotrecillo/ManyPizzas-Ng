import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) {
  }

  login(email: string, password: string){
    return this.http.post('http://api.localhost:8000/auth/authenticate', { email, password })
               .map((response: Response) => {
                 const user = response.json();
                 if (user && user.token) {
                   localStorage.setItem('currentUser', JSON.stringify(user));
                 }
               });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
