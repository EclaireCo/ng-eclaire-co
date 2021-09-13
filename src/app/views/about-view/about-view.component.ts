import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MenuService } from 'src/app/shared/services/menu.service';


@Component({
  selector: 'app-about-view',
  templateUrl: './about-view.component.html',
  styleUrls: ['./about-view.component.less']
})
export class AboutViewComponent implements OnInit {

  @ViewChild('fullpageRef') fp_directive: ElementRef;
  config;
  fullpage_api;

  constructor(private renderer: Renderer2, private menuService: MenuService, private deviceService: DeviceDetectorService) {

    const vid: HTMLMediaElement = document.getElementById('eclaireLogoBg') as HTMLMediaElement;
    this.menuService.disable()

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],

      menu: '#menu',
      navigation: true,

      responsiveWidth: 1100,

      afterLoad: (origin, destination, direction) => {
     
      },
      afterRender: () => {
        
      },
      afterResize: (width, height) => {

      },
      afterSlideLoad: (section, origin, destination, direction) => {

      },
      onLeave: (origin, destination, direction) => {

      }
    };
  }

  ngOnInit(): void {
    this.menuService.enable()
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }


}
