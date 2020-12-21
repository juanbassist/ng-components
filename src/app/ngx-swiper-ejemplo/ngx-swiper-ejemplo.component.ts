import { AfterViewInit, Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { Imagen, Product } from '../app.models';



@Component({
  selector: 'app-ngx-swiper-ejemplo',
  templateUrl: './ngx-swiper-ejemplo.component.html',
  styleUrls: ['./ngx-swiper-ejemplo.component.css']
})
export class NgxswiperEjemploComponent implements OnInit, AfterViewInit {
  public config: SwiperConfigInterface = {};
  product: Product = new Product(0,[]);
  baseUriImg: string = 'https://via.placeholder.com/200';

  constructor() { 
  }

  ngOnInit(): void {
    this.product = 
      new Product(1, [
        new Imagen(`${this.baseUriImg}/FFFFF/000000?Text=Digital.com`),
        new Imagen(`${this.baseUriImg}/000000/FFFFFF?Text=Party.com`),
        new Imagen(`${this.baseUriImg}/FF0000/FFFFFF?Text=Black.com`),
        new Imagen(`${this.baseUriImg}/00FF00/FFFFFF?Text=FIVE.com`),
        new Imagen(`${this.baseUriImg}/0000FF/FFFFFF?Text=TXT.com`),
      ]);
  }

  ngAfterViewInit() {
    this.config = {
      observer: false,
      slidesPerView: 4,
      spaceBetween: 10,
      keyboard: true,
      navigation: true,
      pagination: false,
      loop: false,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        600: {
          slidesPerView: 3
        }
      }
    };
  }
}
