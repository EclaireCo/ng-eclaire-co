import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Observable } from 'rxjs';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  public isOpen: boolean = false; 
  public isMobile = false;
  public w: number = 0;

  public socialIcons: Array<{ link: string, icon: string}>;
  public sectionList: Array<{ link: string, text: string}>;
  public isMenuEnabled$:Observable<boolean>;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.w = event.target.innerWidth;
  }

  constructor( private menuService: MenuService, private deviceService: DeviceDetectorService, private router: Router) {
    
    this.isMobile = this.deviceService.isMobile();

    this.isMenuEnabled$ = this.menuService.isMenuEnabled$;

    this.sectionList = [
      {
        text: 'HOME',
        link: '/',
      },
      {
        text: 'NOSOTROS',
        link: '/about',
      },
      {
        text: 'SERVICIOS',
        link: '/services',
      },
      {
        text: 'PROYECTOS',
        link: '/projects',
      },
      {
        text: 'BLOG',
        link: '/blog',
      },
      {
        text: 'CONTACTO',
        link: '/contact',
      }
    ]

    this.socialIcons = [
      {
        link:"https://www.facebook.com/Eclairearchitecture",
        icon: 'facebook'
      },
      {
        link:"https://www.instagram.com/eclairearchitecture",
        icon: 'instagram'
      },
      {
        link:"https://co.pinterest.com/eclairearq",
        icon: 'pinterest'
      },
      {
        link:"https://www.tiktok.com/@eclairearchitecture",
        icon: 'tiktok'
      },
      {
        link:"https://wa.link/cja72o",
        icon: 'whatsapp'
      },
      {
        link:"https://www.youtube.com/channel/UCKcoPrgOpXtQcmHBflEAZQw",
        icon: 'youtube'
      }
    ]
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.isOpen = false;
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  goToHome(){
    this.router.navigateByUrl('/')
  }
  ngOnInit(): void {
    this.w = window.innerWidth;
    this.isMobile = this.w < 650;
  }

  doToogleOpen(){
    this.isOpen = !this.isOpen;
  }

}
