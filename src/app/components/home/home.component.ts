import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
declare var FB: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild('loginRef', { static: true }) loginElement: ElementRef;

  constructor(private router: Router, private auth: AuthService) { }

  // declare variables
  auth2: any;
  userprofile = []
  errorMessage = ""

  loginForm = new FormGroup({
    "email": new FormControl(null, [Validators.required, Validators.email]),
    "password": new FormControl(null, [Validators.required]),
  })

  ngOnInit(): void {
    this.googleInitializaiton();


    // for facebook login
    (window as any).fbAsyncInit = function () {
      FB.init({
        appId: '1002483113983164',
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

  }

  //***************************************google initializaiton function start *******************************************************//
  googleInitializaiton() {
    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: '891958891351-2mptleqljk8gi6ape047mvutp3ef68oo.apps.googleusercontent.com',
          cookie_policy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLogin();
      });
    }
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }

  prepareLogin() {
    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let profile = googleUser.getBasicProfile();
        // console.log('Token || ' + googleUser.getAuthResponse().id_token);
        // console.log("PROFILES = ", profile)

        this.auth.googleLogin(profile.getEmail(), profile.getName(), googleUser.getAuthResponse().id_token).subscribe((res) => {
          this.userprofile.push(profile)
          localStorage.setItem('social-user-info', JSON.stringify(this.userprofile))
          this.router.navigate(['dashbaord'])
        })
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }
  //***************************************google initializaiton function end *******************************************************//







  //***************************************username password login start *******************************************************//
  onSubmit() {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((res) => {
        this.userprofile.push(this.loginForm.value)
        localStorage.setItem('user-info', JSON.stringify(this.userprofile))
        this.router.navigate(['dashbaord'])
      },
        (err: Error) => {
          this.errorMessage = "Invalid user credential"
        })
    } else {
      this.errorMessage = "Form is not vlaid"
    }
    this.loginForm.reset()
  }
  //***************************************username password login end *******************************************************//


  //***************************************facebook login start *******************************************************//
  facebookLogin() {
    FB.login((response, profile) => {
      console.log("PROFILE = ", profile)
      console.log('submitLogin', response);
      if (response.authResponse) {

        console.log("PROFILE = ", profile)
        console.log(response)
        this.auth.facebookLogin(response.status, response.authResponse.accessToken).subscribe((res) => {

          FB.api('/me', {
            fields: 'last_name, first_name, email , picture , middle_name, name, name_format, short_name, email',
          }, (userInfo) => {
            console.log('userInfo', userInfo);
            // your-code-goes-here
            this.userprofile.push(userInfo)
            localStorage.setItem('facebook-user-info', JSON.stringify(this.userprofile))
          });
          this.router.navigate(['dashbaord'])

        }, (err: Error) => {
          this.errorMessage = "Invalid user credential"
        })
      }
      else {
        this.errorMessage = "Failed to login"
      }
    });
  }
  //***************************************facebook login end *******************************************************//

}

