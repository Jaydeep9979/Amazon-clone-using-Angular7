import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-productchild',
  templateUrl: './productchild.component.html',
  styleUrls: ['./productchild.component.css']
})
export class ProductchildComponent implements OnInit {
  public Id1:any;
  public Id2:any;
  public Info:any;
  constructor(private srv:ServicesService,private activeroute:ActivatedRoute,private router:Router) { }
  
  ngOnInit() {
    this.Id1=this.activeroute.snapshot.paramMap.get('id1');
    this.Id2=this.activeroute.snapshot.paramMap.get('id2');
    this.srv.DisplayListChild(this.Id1,this.Id2).subscribe((data)=>{this.Info=data});
  }
  get_data(name){
    //console.log(name);
    this.router.navigate(['./product_info',name]);
  }

}
