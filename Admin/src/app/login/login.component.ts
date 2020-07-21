import { Component, OnInit } from '@angular/core';
import { EcomService } from '../ecom.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email;password;
  constructor(private ecomServ: EcomService,private router:Router) { }

  ngOnInit() {
    
  }

  login(data)
  {

    console.log("e click");
    event.preventDefault()
    const target = event.target
    var errorList=[]

    this.ecomServ.checklogin(data);
  }
}
