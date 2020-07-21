import { Component, OnInit } from '@angular/core';
import { EcomService } from '../ecom.service';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})

export class SubcategoryComponent implements OnInit {
  public headerData:number = 0;
catselected:any;
  constructor(private ecomServe:EcomService) { }
  subcategory;Repdata1;Repdata;
  ngOnInit() {
    console.log("onInit");
    this.ecomServe.Displaysubcat().subscribe((data)=>{this.Repdata1=data;console.log("IN Init")})
    console.log("back");
    
    console.log("onInit");
    this.ecomServe.Displaycat().subscribe((data)=>{this.Repdata=data;console.log("IN Init")})
    console.log("back");

    setInterval(()=>{this.headerData++;}, 250);

  }

  getsubcat()
  {
    console.log("onInit");
    this.ecomServe.Displaysubcat().subscribe((data)=>{this.Repdata1=data;console.log("IN Init")})
    console.log("back");
  }
  delsubcat(data)
  {
    this.ecomServe.deletesubcat(this.Repdata1[data].subcategory);
  }
  subcat(data)
  {
    this.ecomServe.Addsubcategory(data);
  }


}
