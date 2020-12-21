import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxswiperEjemploComponent } from './ngx-swiper-ejemplo.component';

describe('NgxswiperEjemploComponent', () => {
  let component: NgxswiperEjemploComponent;
  let fixture: ComponentFixture<NgxswiperEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxswiperEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxswiperEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
