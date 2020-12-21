import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSwipperEjemploComponent } from './ngx-swipper-ejemplo.component';

describe('NgxSwipperEjemploComponent', () => {
  let component: NgxSwipperEjemploComponent;
  let fixture: ComponentFixture<NgxSwipperEjemploComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxSwipperEjemploComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSwipperEjemploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
