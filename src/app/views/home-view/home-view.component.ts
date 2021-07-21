import { Component, OnInit } from '@angular/core';
import { options, fullpage_api } from 'fullpage.js/dist/fullpage.extensions.min';
@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.less']
})
export class HomeViewComponent implements OnInit {

  title = 'ng-eclaire-co';
  config: options;
  fullpage_api: fullpage_api;
  constructor() {

    // for more details on config options please visit fullPage.js docs
    this.config = {

      // fullpage options
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      menu: '#menu',

      // fullpage callbacks
      afterResize: () => {
        console.log("After resize");
      },
      afterLoad: (origin:any, destination:any, direction:any) => {
        console.log(origin.index);
      }
    };
  }

  getRef(fullPageRef:any) {
    this.fullpage_api = fullPageRef;
  }

  ngOnInit(): void {
  }

}
