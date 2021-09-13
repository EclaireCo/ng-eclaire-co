import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-whatsapp',
  templateUrl: './btn-whatsapp.component.html',
  styleUrls: ['./btn-whatsapp.component.less']
})
export class BtnWhatsappComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  goToWhatsapp(){
    
      window.open("https://wa.link/cja72o", "_blank");
    
  }

}
