import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor(private session: SessionStorageService, private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.session.remove('currentUser');
    this.router.navigate(['/login']);
  }

}
