import { Component, OnInit } from '@angular/core';
import { EcomService } from '../ecom.service';
@Component({
  selector: 'app-childcategory',
  templateUrl: './childcategory.component.html',
  styleUrls: ['./childcategory.component.css']
})
export class ChildcategoryComponent implements OnInit {
Repdata;Repdata1;Repdata2;
  constructor(private ecomServ:EcomService) { }

  ngOnInit() {
    console.log("onInit cat");
    this.ecomServ.Displaycat().subscribe((data)=>{this.Repdata=data;console.log("IN Init")})
    console.log("back");
    console.log("onInit subcat");
    this.ecomServ.Displaysubcat().subscribe((data)=>{this.Repdata1=data;console.log("IN Init")})
    console.log("back");
    console.log("onInit childcat");
    this.ecomServ.Displaychildcat().subscribe((data)=>{this.Repdata2=data;console.log("IN Init")})
    console.log("back");

  }
  delchildcat(data)
  {
    this.ecomServ.deletechildcat(this.Repdata2[data].childcategory)
  }
  childcat(data)
  {
    this.ecomServ.Addchildcategory(data);
  }

}
