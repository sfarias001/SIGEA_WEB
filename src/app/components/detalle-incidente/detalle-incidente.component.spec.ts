import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleIncidenteComponent } from './detalle-incidente.component';

describe('DetalleIncidenteComponent', () => {
  let component: DetalleIncidenteComponent;
  let fixture: ComponentFixture<DetalleIncidenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleIncidenteComponent]
    });
    fixture = TestBed.createComponent(DetalleIncidenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
