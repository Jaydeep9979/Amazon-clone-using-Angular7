import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  navigationSubscription;
  public Id:any
  public Id1:any
  public Id2:any;
  public Info:any;
  constructor(private router:Router,public srv:ServicesService,public activeroute:ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
     if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
   }
  initialiseInvites(){
    this.Id=this.activeroute.snapshot.paramMap.get('id');
    this.Id1=this.activeroute.snapshot.paramMap.get('id1');
    this.Id2=this.activeroute.snapshot.paramMap.get('id2');
    this.srv.DisplayListSub(this.Id).subscribe((data)=>{this.Info=data});
    this.srv.DisplayListChild(this.Id1,this.Id2).subscribe((data)=>{this.Info=data});
   }
  
 ngOnInit() {
  //  this.Id=this.activeroute.snapshot.paramMap.get('id');
  //  this.Id1=this.activeroute.snapshot.paramMap.get('id1');
  //  this.Id2=this.activeroute.snapshot.paramMap.get('id2');
  //  this.srv.DisplayListSub(this.Id).subscribe((data)=>{this.Info=data});
  //  this.srv.DisplayListChild(this.Id1,this.Id2).subscribe((data)=>{this.Info=data});
  }
  get_data(name){
    //console.log(name);
    this.router.navigate(['./product_info',name]);
  }
}
