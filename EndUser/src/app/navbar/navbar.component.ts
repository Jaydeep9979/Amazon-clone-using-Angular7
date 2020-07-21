import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private serv:ServicesService,private router:Router) { }
  public Category:any;
  public SubCategory:any;
  public ChildCategory:any

  ngOnInit() {
   this.serv.DisplayCategory().subscribe((data)=>{this.Category=data});
   this.serv.DisplaySubCategory().subscribe((data)=>{this.SubCategory=data});
   this.serv.DisplayChildCategory().subscribe((data)=>{this.ChildCategory=data});
  }
  get_dataBySubCategory(name){
    //console.log(name);
    this.router.navigate(['./product_list',name]);
  }

  get_dataByChildCategory(parent,child){
    //console.log(parent);
    //console.log(child);
    this.router.navigate(['./product_list',parent,child]);
  }
}
