import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { BtnCallUsComponent } from './components/btn-call-us/btn-call-us.component';
import { BtnBoutiqueComponent } from './components/btn-boutique/btn-boutique.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    BtnCallUsComponent,
    BtnBoutiqueComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
