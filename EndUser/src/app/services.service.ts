import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpResponse, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';
import { Router,RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Observable, throwError, of } from 'rxjs';
import { mergeMap, switchMap, retry, map, catchError, filter, scan } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  public uname:String;
  public flag:boolean=false;
  public sign:boolean=false;
  public data
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }
  cons
  newuser(info){
    console.log("register-service called.");
    this.http.post('http://localhost:8000/register', info).subscribe((res)=>{
      var data=JSON.stringify(res);
      var stat=JSON.parse(data);
      if(stat.status="success"){
        alert("You Are Successfully Registred......");
        this.sign=true;
      }
      else{
        alert("Some Problem Occure..");
      }
  });    
  }

  check(info){
    console.log("login-service called.");
    this.http.post('http://localhost:8000/logincheck',info).subscribe(res=>{
      var data=JSON.stringify(res);
      console.log(data);
      var stat=JSON.parse(data);
      if(stat.status=="fail"){
        alert("Incorrect Crediantials... Please Try Again..");
      }
      else{
       //this.router.navigate([''],{queryParams:{Name:stat.user}});
       //this.route.snapshot.queryParamMap.get('Name');
       //this.uname=stat.user;
       sessionStorage.setItem("User",info.UserName);
       //this.flag=true;
      }
    });
  }

  sendemail(info){
    console.log("Email Service Called..");
    this.http.post('http://localhost:8000/sendmail',info).subscribe((res)=>{
      var data=JSON.stringify(res);
      console.log(data);
      var stat=JSON.parse(data);
      if(stat.status=="fail"){
        alert("Some Problem Occurs..");
      }
      else{
        alert("Your Content Successfully Submitted..");
      }
    });
  }

  DisplayCategory(){
    return this.http.get("http://localhost:8000/Display");
  }

  DisplaySubCategory(){
    return this.http.get("http://localhost:8000/Displaysubcategory");
  }

  DisplayChildCategory(){
    return this.http.get("http://localhost:8000/Displaychildcategory");
  }

  DisplaySlider(){
     return this.http.get("http://localhost:8000/Slider");
  }
  Displayinfo(name){
    return this.http.get("http://localhost:8000/DisplayInfo"+"/"+name);
  }

  DisplayListSub(name){
    return this.http.get("http://localhost:8000/DisplayListSub"+"/"+name);
  }
 DisplayListChild(id1,id2){
    return this.http.get("http://localhost:8000/DisplayListChild"+"/"+id1+"/"+id2);
  }

 DisplayReview(){
   return this.http.get("http://localhost:8000/DisplayReview");
 }

 DisplayQuery(){
   return this.http.get("http://localhost:8000/Displayquery");
 }

 Displaymyinfo(name){
   return this.http.get("http://localhost:8000/myinfo"+"/"+name);
 }

/* InsertReview(item1,item2,item3,item4,cdate,info){
    console.log("InsertReview Method called...");
    this.http.post("http://localhost:8000/Insertview",[item1,item2,item3,item4,cdate,info]).subscribe((res)=>{
      var data=JSON.stringify(res);
      console.log(data);
      var stat=JSON.parse(data);
      if(stat.status=="success"){
        alert("Your Review Successully Submitted.");
      }
      else{
        alert("some problem occurs..");
      }
    });
  }*/

  InsertReview(info){
    console.log("InsertReview Method called...");
    this.http.post("http://localhost:8000/Insertview",info).subscribe((res)=>{
      var data=JSON.stringify(res);
      console.log(data);
      var stat=JSON.parse(data);
      if(stat.status=="success"){
        alert("Your Review Successully Submitted.");
      }
      else{
        alert("some problem occurs..");
      }
    });
  }
}