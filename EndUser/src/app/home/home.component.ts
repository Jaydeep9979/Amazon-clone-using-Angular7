import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
 public ProductData:any;
 public i:Number=1;
 slides = [
    {img: "../assets/slider/1.jpg"},
    {img: "../assets/slider/2.jpg"},
    {img: "../assets/slider/3.jpg"},
    {img: "../assets/slider/4.jpg"},
    {img: "../assets/slider/5.jpeg"},
    {img: "../assets/slider/6.jpg"},
    {img: "../assets/slider/7.jpeg"},
    {img: "../assets/slider/8.jpg"},
    {img: "../assets/slider/9.jpg"},
    {img: "../assets/slider/11.jpg"},
    {img: "../assets/slider/12.jpg"} 
  ];
 
  slideConfig = {
    "slidesToShow": 1, 
    "slidesToScroll": 1,
    "nextArrow":"<div class='nav-btn next-slide'><div>",
    "prevArrow":"<div class='nav-btn prev-slide'></div>",
    "dots":true,
    "infinite": false
  };
  constructor(private srv:ServicesService) { }
  private Data:any;
  /*offer=[
    {img: "../assets/todayoffer/11pro.jpg",originalprice:"85000",discountprice:"80000",name:"Iphone 11 Pro"},
    {img: "../assets/todayoffer/earphone.jpg",originalprice:"1500",discountprice:"1500",name:"Boat Earphone"},
    {img: "../assets/todayoffer/ledtv.jpeg",originalprice:"121000",discountprice:"78000",name:"Samsung Led Tv"},
    {img: "../assets/todayoffer/perfume.jpg",originalprice:"300",discountprice:"150",name:"KS perfume"},    
  ];*/

  ngOnInit() {
      this.srv.DisplaySlider().subscribe((data)=>{this.Data=data/*,console.log(this.Data)*/});
    }

}
