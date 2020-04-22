import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get isLogin(){
    this.user = JSON.parse(localStorage.getItem('usuario'));
    if(this.user != null){
      return true;
    }else{
      return false;
    }
  }

  logOut(){
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

}
