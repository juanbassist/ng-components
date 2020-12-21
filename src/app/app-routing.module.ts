import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxswiperEjemploComponent } from './ngx-swiper-ejemplo/ngx-swiper-ejemplo.component';

const routes: Routes = [
  { path: 'ngx-swiper-ejemplo', component: NgxswiperEjemploComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
