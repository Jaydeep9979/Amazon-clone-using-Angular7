import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;
var fieldName;
@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  constructor(private srv:ServicesService,private activeroute:ActivatedRoute,private route:Router) { }
  public Info:any;
  public Review:any;
  public Que:any;
  public cdate:number=Date.now();
  public Id:any;
  ngOnInit() {
    $(document).ready(function(){
      $('.qtyplus').click(function(e){
          e.preventDefault();
          fieldName = $(this).attr('field');
          var currentVal = parseInt($('input[name='+fieldName+']').val());
          if (!isNaN(currentVal)){
              $('input[name='+fieldName+']').val(currentVal + 1);
          } else {
              $('input[name='+fieldName+']').val(0);
          }
      });
      $(".qtyminus").click(function(e) {
          e.preventDefault();
          fieldName = $(this).attr('field');
          var currentVal = parseInt($('input[name='+fieldName+']').val());
          if (!isNaN(currentVal) && currentVal > 0) {
              $('input[nanm,me='+fieldName+']').val(currentVal - 1);
          } else {
              $('input[name='+fieldName+']').val(0);
          }
      });
  });
  this.Id=this.activeroute.snapshot.paramMap.get('id');
  this.srv.Displayinfo(this.Id).subscribe((data)=>{this.Info=data});
  this.srv.DisplayReview().subscribe((data)=>{this.Review=data});
  this.srv.DisplayQuery().subscribe((data)=>{this.Que=data});
  }
  ins_review(info){
      //console.log(item1);
      //console.log(item2);
      //console.log(item3);
      //console.log(item4);
      //console.log(info);
      //console.log(cdate);
      console.log(info);
      //this.srv.InsertReview(item1,item2,item3,item4,cdate,info);
      this.srv.InsertReview(info);
  }
}
