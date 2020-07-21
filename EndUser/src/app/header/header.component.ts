import { Component, OnInit } from '@angular/core';
import { ServicesService} from '../services.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private srv:ServicesService,private router:Router) { }
  public stat:boolean;
  public signup:boolean;
  ngOnInit() {
  
  }
  
   Register(info){
       this.srv.newuser(info);
       this.signup=this.srv.sign;
       $(document).ready(function(){
        $('#id02').modal('hide');
   });
   }

   loginauth(info){
       this.srv.check(info);
       this.stat=this.srv.flag;
       //if(this.stat){
       console.log("After Logging..");
       //if(this.stat==true){
        $(document).ready(function(){
          $('#id01').modal('hide');
     });
   //} 
 //}
}

getname(name){
  return sessionStorage.getItem("User");
}

   logout(name){
     sessionStorage.removeItem("User");
     this.router.navigate(['/home']);
   }
 
  searchItem(info){
     console.log(info)
     this.router.navigate(['./product_list',info]);
  }

  getinfo(info){
    console.log(info);
    this.router.navigate(['./myinfo',info]); 
  }
}
