import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-myinfo',
  templateUrl: './myinfo.component.html',
  styleUrls: ['./myinfo.component.css']
})
export class MyinfoComponent implements OnInit {

  constructor(private activeroute:ActivatedRoute,private srv:ServicesService) { }
  public Name:any;
  public info:any;
  ngOnInit() {
    this.Name=this.activeroute.snapshot.paramMap.get('name');
    this.srv.Displaymyinfo(this.Name).subscribe((data)=>{this.info=data});
    //console.log(this.Name);
  }
  getname(name){
    return sessionStorage.getItem("User");
  }
}
