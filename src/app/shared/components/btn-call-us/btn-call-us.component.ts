import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-call-us',
  templateUrl: './btn-call-us.component.html',
  styleUrls: ['./btn-call-us.component.less']
})
export class BtnCallUsComponent implements OnInit {

  constructor() { }


  goToCalendly(){
    window.open("https://calendly.com/eclairearchitecture/llamada15min", "_blank");
  }

  ngOnInit(): void {
  }

}
