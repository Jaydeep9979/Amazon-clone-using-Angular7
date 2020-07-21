import { Component, OnInit } from '@angular/core';
import { EcomService } from '../ecom.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  fileData: File = null;

  imgurl:String=""
  fileToUpload:File=null;
  constructor(private ecomServ:EcomService) { }
  Repdata;Repdata1;Repdata2;Productdata;

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
    
    this.ecomServ.Displaycat().subscribe((data)=>{this.Repdata=data;console.log("IN Init")})
    
    this.ecomServ.Displaysubcat().subscribe((data)=>{this.Repdata1=data;console.log("IN Init")})
   
    this.ecomServ.Displaychildcat().subscribe((data)=>{this.Repdata2=data;console.log("IN Init")})
    
    this.ecomServ.Displayproduct().subscribe((data)=>{this.Productdata=data;console.log("IN Init")})


  }

  
  RequestDataEntry(event)
  {
    console.log("Inside RequestDataEntry");
    event.preventDefault();
    const target = event.target;
    var errorList = [];
    
    const cat = target.querySelector("#cat").value;
    const subcat = target.querySelector("#subcat").value;
    const childcat = target.querySelector("#childcat").value;
    const product = target.querySelector("#product").value;
    const price = target.querySelector("#price").value;
    const desc = target.querySelector("#desc").value;
    const img = this.imgurl;
    console.log(cat);
    console.log(subcat);
     this.ecomServ.requestEntry(cat,subcat,childcat,product,price,desc,img);
    
    
}

delprd(data)
{
  this.ecomServ.deleteprd(this.Productdata[data]._id)
}
}