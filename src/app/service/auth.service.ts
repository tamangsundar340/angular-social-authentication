import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  email = "a@gmail.com";
  password = "password";
  name = "Sundar Tamang";

  constructor(private router: Router) { }

  // set token
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // get token to login
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // check wheater login or not
  isLoggedIn() {
    return this.getToken() !== null;
  }

  //
  redirectToPage(){
    return this.router.navigate([''])
  }

  // logout funciton
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user-info');
    localStorage.removeItem('social-user-info');
    localStorage.removeItem('facebook-user-info');
    this.router.navigate(['']);
  }

  login({ email, password }: any): Observable<any> {
    if (this.email === email && this.password === password) {
      this.setToken('abcdefghijklmnopqrstuvwxyz')
      return of({ name: this.name, email: this.email })
    }
    return throwError(new Error('Failed to login'))

  }

  googleLogin(email, name, socialtoken):Observable<any>{
    if(email != null && name != null){
      this.setToken(socialtoken)

      return of({email: this.email, name:this.name})
    }
    return throwError(new Error('Failed to login'))
  }

  facebookLogin(status, accessToken):Observable<any>{
    if(status === "connected" && accessToken != null){
      this.setToken(accessToken)

      return of({status: status, accessToken:accessToken})
    }
    return throwError(new Error('Failed to login'))
  }


}
