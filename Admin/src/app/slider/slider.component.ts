import { Component, OnInit } from '@angular/core';
import { EcomService } from '../ecom.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  fileData: File = null;

  imgurl:String=""
  fileToUpload:File=null;

  constructor(private ecomServ:EcomService) { }
  Sliderdata
  handleFileInput(file:FileList){
    this.fileToUpload = file.item(0)
    var reader = new FileReader()
    reader.onload = (event: any) => {
      this.imgurl=event.target.result;
      console.log(this.imgurl)        
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  ngOnInit() {
    console.log("onInit");
    this.ecomServ.Displayslider().subscribe((data)=>{this.Sliderdata=data;console.log("IN Init")})
    console.log("back");
  }
  
  RequestDataEntry1(event)
  {
    console.log("Inside RequestDataEntry1");
    event.preventDefault();
    const target = event.target;
    var errorList = [];

    const slider = target.querySelector("#slider").value;
    const desc = target.querySelector("#desc").value;
    const img = this.imgurl;
   
     this.ecomServ.requestEntry1(slider,desc,img);
    
    
}
delslider(data)
  {
    this.ecomServ.deleteslider(this.Sliderdata[data]._id)
  }

}
