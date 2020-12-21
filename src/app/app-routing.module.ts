import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgxSwipperEjemploComponent } from './ngx-swipper-ejemplo/ngx-swipper-ejemplo.component';

const routes: Routes = [
  { path: 'ngx-swipper-ejemplo', component: NgxSwipperEjemploComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
