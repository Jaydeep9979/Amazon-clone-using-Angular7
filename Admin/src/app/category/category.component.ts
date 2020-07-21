import { Component, OnInit } from '@angular/core';
import { EcomService } from '../ecom.service';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category;Repdata;Catdata;
  navigationSubscription;items;
  check;
  constructor(private router:Router,private ecomServ:EcomService,public activeroute:ActivatedRoute) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });

  }
  initialiseInvites(){
    this.ecomServ.Displaycat().subscribe((data)=>{this.Repdata=data;console.log("IN Init")})
  }
  delcat(data)
  { 
    this.ecomServ.deletecat(this.Repdata[data].category);
  }
  // editcat(data)
  // {
  //   this.ecomServ.editcat(this.Repdata[data].category); 
  // }


  
  ngOnInit() {
    this.check=false;
    console.log("onInit");
    this.ecomServ.Displaycat().subscribe((data)=>this.ecomServ.cataegory.next(data))
    this.ecomServ.cateCast.subscribe(items=>this.Repdata=items)

    console.log("back");
  }

  edit = function (obj) {
    
    this.category = obj.category;
    this.check = true;
  }

  // getcat() {
  //   console.log("onInit");
  //   this.ecomServ.Displaycat().subscribe((data)=>{this.Repdata=data;console.log("IN Init")})
  //   console.log("back");

  // }
  cat(data)
  {
    this.ecomServ.Addcategory(data);
    this.ecomServ.Displaycat().subscribe(items=>this.ecomServ.cataegory.next(data))
    
  }
  updatecat(data)
  {
    alert(data);
    this.ecomServ.updatecat(data);
  }


}
