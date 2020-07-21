import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }
   
  
  ngOnInit() {
    $(".shipping-detail .address-detail").click(function () {
      $(" .shipping-detail .address-detail").removeClass("active");
      $(this).addClass("active");        
});
$(document).ready(function(){
    $('.shipping-detail .shipping-address .head a').click(function() {
    $('.card').toggle("slide");  
});
});

$(document).ready(function(){
$('.shipping-detail .shipping-address .address-detail  a.edit').click(function() {
  $('.card').toggle("slide");
  
});
});

$(document).ready(function(){
$('.shipping-detail .shipping-address .address-detail  a.delete').click(function() {
  $(this).parent().parent().parent().parent().remove();
   // $(this).closest(".address-detail").remove();
  
});
});

  }

}
