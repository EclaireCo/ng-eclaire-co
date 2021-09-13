import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-not-found-view',
  templateUrl: './not-found-view.component.html',
  styleUrls: ['./not-found-view.component.less']
})
export class NotFoundViewComponent implements OnInit {

  title = '';
  text = '';
  constructor(private router: Router) { 
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        if(window.location.href.includes('project')){
          this.title = 'PROYECTOS';
          this.text = 'Podrás disfrutar de esta página y ver todos nuestros proyectos. Queremos que todo esté bien, así que estamos dando los últimos toques de diseño mientras hablamos. ';
        }
        if(window.location.href.includes('services')){
          this.title = 'SERVICIOS';
          this.text = 'Podrás disfrutar de esta página y conocer acerca de nuestros servicios, como te podemos ayudar y los beneficios que obtienes por medio de un servicio integral. Queremos que todo esté bien, así que estamos dando los últimos toques de diseño mientras hablamos. ';
        }
        if(window.location.href.includes('blog')){
          this.title = 'BLOG';
          this.text = 'Podrás disfrutar de información de interés y nuestra columna de opinión acerca de arquitectura, tecnología, bioclimática, diseño interior y tendencias en mobiliario y decoración.  Queremos que todo esté bien, así que estamos dando los últimos toques de diseño mientras hablamos. ';
        }
        
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  ngOnInit(): void {
  }

}
