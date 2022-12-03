import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraOpcionesSesionComponent } from './barra-opciones-sesion.component';

describe('BarraOpcionesSesionComponent', () => {
  let component: BarraOpcionesSesionComponent;
  let fixture: ComponentFixture<BarraOpcionesSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraOpcionesSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraOpcionesSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
