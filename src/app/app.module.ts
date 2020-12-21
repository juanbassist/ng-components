import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgxSwipperEjemploComponent } from './ngx-swipper-ejemplo/ngx-swipper-ejemplo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NgxSwipperEjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
