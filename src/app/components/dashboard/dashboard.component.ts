import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  profile : any
  socialProfile : any
  faebookProfile : any
  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('token'))
    if(localStorage.getItem('user-info')){
      this.profile = JSON.parse(localStorage.getItem('user-info'))[0]
    }
    if(localStorage.getItem('social-user-info')){
      this.socialProfile = JSON.parse(localStorage.getItem('social-user-info'))[0]
    }

    if(localStorage.getItem('facebook-user-info')){
      this.faebookProfile = JSON.parse(localStorage.getItem('facebook-user-info'))[0]
      
    }
    console.log(this.faebookProfile)
  }

}
