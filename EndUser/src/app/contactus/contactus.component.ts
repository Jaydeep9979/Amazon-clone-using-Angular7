import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private srv:ServicesService) { }

  ngOnInit() {
  }

   ContactUs(data){
     console.log(data);
     this.srv.sendemail(data);
   }
}
