import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { MenuService } from 'src/app/shared/services/menu.service';

// import Swiper core and required modules
import SwiperCore from 'swiper';
import { PaginationOptions } from 'swiper/types';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.less']
})
export class HomeViewComponent implements OnInit {

  title = 'ng-eclaire-co';
  isMobile = false;

  sw_config:any = {
    direction: 'horizontal',
    slidesPerView: 3,
    keyboard: true,
    spaceBetween: 50,
    mousewheel: true,
    scrollbar: false,
    navigation: {
      el: '.swiper-pagination',
      clickable: true,
      hideOnClick: false
    },
    pagination: false,
    breakpoints:{
       640:{
            slidesPerView: 3, 
           }
    }
  }



  
  public sw_pagination: PaginationOptions | any = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild('fullpageRef') fp_directive: ElementRef;
  config;
  fullpage_api;


  testimonios = [
    {
      author: 'Johanna Quiroga',
      text:'Desde hace 7 años después de haber realizado un trabajo de remodelación en mi apartamento de bogotá, el diseño de una casa en las afueras de villavicencio y ahora último que me ayudaron con el interiorismo de mi apartamento en cartagena recibí un trabajo excepcional y resalto su cumplimiento y profesionalismo',
    },
    {
      author: 'Erika Filo, Gerente de administrativa de Controles Empresariales',
      text:'El desarrollo de este proyecto lo puedo describir como proponente y determinante para llevar acabo la conexión de filosofía y el concepto de nuestra empresa por medio del diseño y la arquitectura, Eclaire desempeña una excelente labor de desarrollo y acompañamiento, creando espacio en su interior y exterior',
    },
    {
      author: 'Henry Lankast',
      text:'Las personas innovadoras que quieren ir a la vanguardia en todos los sentidos de su vida, eligen ÉCLAIRE porque es el puente para ver reflejada su personalidad en los espacios en los que habita, dándole un toque sofisticado sin perder estilo',
    },
    {
      author: 'Daniel Marín Giraldo',
      text:'Eclaire realizó el diseño de mi espacio comercial en la ciudad de Manizales, puedo dar fe del profesionalismo, el compromiso, el nivel de acierto y el buen gusto para la toma de decisiones en el proceso de diseño y ambientación',
    },
    {
      author: 'Guillermo León Giraldo Gil',
      text:'Eclaire nos asesoró en la corrección y re diseño de nuestro Hotel Boutique, ubicado en el municipio de Guatapé, donde demostraron ser excelentes, con conocimientos en diseño, planimetría e implantación de nuestra nueva etapa, decidiendo después de esto que ellos fueran los encargados de desarrollar todo el proyecto de diseño y renderización, hemos encontrado en ellos, unos buenos aliados, que se comprometen con el desarrollo objetivo de toma de decisiones teniendo en cuenta nuestra inversión',
    },
    {
      author: 'Guillermo Rojas',
      text:'Eclaire realizo el trabajo de remodelación e interiorismo para mi apartamento en Bogotá. Considero una empresa con profesionalismo, íntegros, responsables con grandes conocimientos en obra, superando las expectativas que teníamos en el diseño, una de las cosas que más aprecio fue todo su acompañamiento y asesoría en la toma de decisiones en acabados, materiales y la fabricación de mis muebles',
    },
  ]

  constructor(private renderer: Renderer2, private menuService: MenuService, private deviceService: DeviceDetectorService) {

    const vid: HTMLMediaElement = document.getElementById('eclaireLogoBg') as HTMLMediaElement;
    this.menuService.disable()

    // this is just an example => for more details on config please visit fullPage.js docs
    this.config = {
      licenseKey: 'YOUR LICENSE KEY HERE',
      anchors: ['video', 'we', 'experience', 'good-hands', 'ligth','testimonios', 'agendar','contact'],
      sectionsColor: ['#000', '#fff', '#fff', '#fff', '#fff'],

      menu: '#menu',
      navigation: true,

      responsiveWidth: 1100,

      // events callback
      afterLoad: (origin, destination, direction) => {
        if(destination.index == 0){
          setTimeout(() => { (document.getElementById('eclaireLogoBg') as any).play();}, 1000)
        }
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        // console.log(destination);
      },
      onLeave: (origin, destination, direction) => {

        if(destination.index == 0){
          this.menuService.disable();
          if(vid) vid.pause();
        } else {
          this.menuService.enable()
        }


      }
    };
  }


  ngOnInit() {
    this.setCalendarStyles();
    this.isMobile = window.innerWidth < 650;
  }

  goToNextSlide(){
    this.fullpage_api.moveSectionDown();
  }

  getRef(fullPageRef) {
    this.fullpage_api = fullPageRef;
  }

  addSection() {
    // change background color
    this.config['sectionsColor'] = Array(6).fill(0).map(x => this.randomColor());

    // creating the section div
    const section = this.renderer.createElement('div');
    this.renderer.addClass(section, 'section');
    this.renderer.setProperty(section, 'innerHTML', '<h3>New Section</h3>');
    // adding section
    this.renderer.appendChild(this.fp_directive.nativeElement, section);

    this.fullpage_api.build();
  }

  removeLast() {
    const lastSection = this.fp_directive.nativeElement.lastChild;

    if (lastSection.isEqualNode(this.fullpage_api.getActiveSection().item)) {
      this.fullpage_api.moveSectionUp();
    }
    lastSection.remove();

    this.fullpage_api.build();
  }

  randomColor() {
    return '#' + Math.random().toString(16).slice(-3);
  }

  setCalendarStyles(){
    if(document.querySelector('[data-container=booking-container]')){
      const elemt: HTMLElement = document.querySelector('[data-container=booking-container]') as HTMLElement;
      elemt.style.backgroundImage = "url('https//eclaire.co/assets/images/bg_calendar.png')";
    }
    
  }

  onSwiper(swiper) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
