import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-slide-double',
  templateUrl: './layout-slide-double.component.html',
  styleUrls: ['./layout-slide-double.component.less']
})
export class LayoutSlideDoubleComponent implements OnInit {

  @Input() layoutPictureSide: string = 'left';
  @Input() layoutTextAlign: string = 'inherit';
  @Input() layoutTextMaxWidth: string = '100%';
  
  constructor() { }

  ngOnInit(): void {
  }

}
