import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeViewComponent } from './home-view/home-view.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'swiper/angular';
import { AboutViewComponent } from './about-view/about-view.component';
import { NotFoundViewComponent } from './not-found-view/not-found-view.component';

@NgModule({
  declarations: [
    HomeViewComponent,
    AboutViewComponent,
    NotFoundViewComponent
  ],
  imports: [
    CommonModule,
    AngularFullpageModule ,
    SharedModule,
    SwiperModule
  ],
  exports: [
    HomeViewComponent
  ]
})
export class ViewsModule { }
