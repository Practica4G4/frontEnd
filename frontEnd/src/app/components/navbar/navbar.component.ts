import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  get isLogin(){
    if(localStorage.getItem('usuario') != null){
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
