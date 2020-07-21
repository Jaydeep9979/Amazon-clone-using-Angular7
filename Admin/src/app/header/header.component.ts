import { Component, OnInit } from '@angular/core';
import {Router,RouterModule} from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public islogged=false;
  constructor(private router:Router) { }

  ngOnInit() {
    
    
  }
  onLogout(){
    sessionStorage.clear();
    this.islogged = false;
    this.router.navigate(['/login']);
    
  }

}
