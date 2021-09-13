import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutViewComponent } from './views/about-view/about-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NotFoundViewComponent } from './views/not-found-view/not-found-view.component';

const routes: Routes = [
  {
    path: '', component: HomeViewComponent
  },
  {
    path: 'about', component: AboutViewComponent
  },
  {
    path: 'services', component: NotFoundViewComponent
  },
  {
    path: 'projects', component: NotFoundViewComponent
  },
  {
    path: 'blog', component: NotFoundViewComponent
  },
  {
    path: 'contact', component: NotFoundViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
