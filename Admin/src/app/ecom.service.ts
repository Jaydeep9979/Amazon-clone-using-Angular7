

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router,RouterModule} from '@angular/router';
import { TypeScriptEmitter } from '@angular/compiler';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class EcomService {
  public authListner = new Subject<boolean>();
  public  verify:"true";

  public cataegory = new BehaviorSubject<any>('')
  public cateCast = this.cataegory.asObservable()

  
  constructor(private http:HttpClient,private router:Router) { }
  public isloggedIn:boolean =JSON.parse(sessionStorage.getItem('auth'))=="true"||false;
  getAuthListner(){
    return this.authListner.asObservable();
  }
  checklogin(data){
    console.log("in login check service...");
    this.http.post('http://localhost:3000/login',data).subscribe(res=>{var name=JSON.stringify(res);
    console.log(name)
    var st=JSON.parse(name)
    console.log(st.status)
      if(st.status=="fail")
      {
        alert("please enter correct username or password !!!");
      }

      else
      {
       // this.authListner.next(true);
        ///console.log(res.userd)
        console.log("email from service:"+data.email)
        sessionStorage.setItem('email',data.email)
        sessionStorage.setItem('auth',"true")
       // this.isLogged.next(true)
          this.router.navigate(['/product'])
      }


});
}
  Addcategory(data)
  {
    console.log("you are in Add Category Service ");
    this.http.post('http://localhost:3000/category',data).subscribe(res=>{var category=JSON.stringify(res);
    console.log(category);
    var st=JSON.parse(category);
    console.log(st.status);
    if(st.status=="fail")
      {
        alert("Category is Not Inserted !");
      }
      else
      {
        alert("Category is Inserted !");
          this.router.navigate(['/category']);
      }
  })

  }
  Displaycat()
  {
    console.log("in display cat");
    return this.http.get('http://localhost:3000/displaycat')
  }
  updatecat(data)
  {
    console.log("you are in update Category Service ");
    this.http.post('http://localhost:3000/updatecat',data).subscribe(res=>{var category=JSON.stringify(res);
    console.log(category);
    var st=JSON.parse(category);
    console.log(st.status);
    if(st.status=="fail")
      {
        alert("Category is Not updated !");
      }
      else
      {
        alert("Category is updated !");
          this.router.navigate(['/category']);
      }
  })
  }

  Addsubcategory(data)
  {
    console.log("you are in Add Subcategory Service ");
    this.http.post('http://localhost:3000/subcategory',data).subscribe(res=>{var subcategory=JSON.stringify(res);
    console.log(subcategory);
    var st=JSON.parse(subcategory);
    console.log(st.status);
    if(st.status=="fail")
      {
        alert("Subcategory is Not Inserted !");
      }
      else
      {
        alert("Subcategory is Inserted !");
          this.router.navigate(['/subcategory']);
      }
  })
  }
  Displaysubcat()
  {
    console.log("in display subcat");
    return this.http.get('http://localhost:3000/displaysubcat')
  }
  deletecat(data:string)
  {
    console.log("in delete cat");
    this.http.delete('http://localhost:3000/delcat'+"/"+data).subscribe((res)=>{console.log(res)});

  } 
  editcat(data)
  {
    console.log("in edit cat");
    this.http.get('http://localhost:3000/editcat',data).subscribe((res)=>{console.log(res)});
  }

  deletesubcat(data:string)
  {
    console.log("in delete subcat");
    this.http.delete('http://localhost:3000/delsubcat'+"/"+data).subscribe((res)=>{console.log(res)});

  } 
  
  deletechildcat(data:string)
  {
    console.log("in delete childcat");
    this.http.delete('http://localhost:3000/delchildcat'+"/"+data).subscribe((res)=>{console.log(res)});

  } 

  
  deleteslider(data:string)
  {
    console.log("in delete slider");
    console.log(data);
    this.http.delete('http://localhost:3000/delslider'+"/"+data).subscribe((res)=>{console.log(res)});

  } 

  deleteprd(data:string)
  {
    console.log("in delete prd");
    console.log(data);
    this.http.delete('http://localhost:3000/delprd'+"/"+data).subscribe((res)=>{console.log(res)});

  } 
  
  
  Addchildcategory(data)
  {
    console.log("you are in Add Childcategory Service ");
    this.http.post('http://localhost:3000/childcategory',data).subscribe(res=>{var childcategory=JSON.stringify(res);
  //  console.log(childcategory);
    var st=JSON.parse(childcategory);
  //  console.log(st.status);
    if(res)
      {
        alert("Childcategory is Inserted !");
        var cur = this.router.url;
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate([cur]);
      }); 
         
      }
  })
  }

  Displaychildcat()
  {
    console.log("in display childcat");
    return this.http.get('http://localhost:3000/displaychildcat')
  }

  
  Displayslider()
  {
    console.log("in display display slider");
    return this.http.get('http://localhost:3000/displayslider')
  }
  

  
  requestEntry(cat,subcat,childcat,product,price,desc,img)
  {
    console.log("Inside Request Auth service");
    this.http.post("http://localhost:3000/requestentry", {cat,subcat,childcat,product,price,desc,img})
      .subscribe(
        (response: any) => {
          if (response.isSucceedr) {
            console.log("request succesful from ecom service")

            this.router.navigate(['/product']);
          }
        },
        (error: any) => {
          if (error.isSucceedr === "false") {
            console.log("Error-->");
          }
        }
        );
  }

  requestEntry1(slider,desc,img)
  {
    console.log("Inside Request Auth service");
    this.http.post("http://localhost:3000/requestentry1", {slider,desc,img})
      .subscribe(
        (response: any) => {
          if (response.isSucceedr) {
            console.log("request succesful from ecom service")

            this.router.navigate(['/slider']);
          }
        },
        (error: any) => {
          if (error.isSucceedr === "false") {
            console.log("Error-->");
          }
        }
        );
  }

  
Displayproduct()
{
  console.log("in display display slider");
  return this.http.get('http://localhost:3000/displayproduct')
}

  
}
