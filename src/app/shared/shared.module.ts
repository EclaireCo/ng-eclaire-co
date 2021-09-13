import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { BtnCallUsComponent } from './components/btn-call-us/btn-call-us.component';
import { BtnBoutiqueComponent } from './components/btn-boutique/btn-boutique.component';
import { RouterModule } from '@angular/router';
import { LayoutSlideDoubleComponent } from './components/layouts/layout-slide-double/layout-slide-double.component';
import { DeviceDetectorService } from 'ngx-device-detector';

import { SwiperModule } from 'swiper/angular';
import { BtnWhatsappComponent } from './components/btn-whatsapp/btn-whatsapp.component';
import { SortByLengthPipe } from './pipes/sortByLength.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BtnCallUsComponent,
    BtnBoutiqueComponent,
    LayoutSlideDoubleComponent,
    BtnWhatsappComponent,
    SortByLengthPipe
  ],
  exports: [HeaderComponent,
    FooterComponent,
    MenuComponent,
    BtnCallUsComponent,
    LayoutSlideDoubleComponent,
    BtnWhatsappComponent,
    BtnBoutiqueComponent,
    SortByLengthPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ]
})
export class SharedModule { }
