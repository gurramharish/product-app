import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.stagging';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticated = false;

  authenticated$: BehaviorSubject<boolean> = new BehaviorSubject(this.authenticated);

  nextUrl: string;
  constructor(private http: HttpClient, private router: Router) {
    if (this.token) {
      this.authenticated = true;
      this.authenticated$.next(this.authenticated);
    }
  }

  get token() {
    return localStorage.getItem('token');
  }

  login(username: string, password: string) {
    const data = {
      username,
      password
    };
    this.http.post(`${environment.authEndPoint}`, data)
    .subscribe((result: any) => {
        console.log('result ', result);
        localStorage.setItem('token', result.token);
        this.authenticated = true;
        this.authenticated$.next(this.authenticated);
        this.router.navigateByUrl(this.nextUrl || '/');
    }, err  => {
      console.log('error while login :: ', err);
    });
  }

  logout() {
    localStorage.clear();
    this.authenticated = false;
    this.authenticated$.next(this.authenticated);
    this.router.navigateByUrl('/');
  }
}
