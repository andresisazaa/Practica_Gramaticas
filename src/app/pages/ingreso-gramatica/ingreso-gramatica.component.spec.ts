import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoGramaticaComponent } from './ingreso-gramatica.component';

describe('IngresoGramaticaComponent', () => {
  let component: IngresoGramaticaComponent;
  let fixture: ComponentFixture<IngresoGramaticaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngresoGramaticaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoGramaticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
