import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentesComponent } from './incidentes.component';

describe('IncidentesComponent', () => {
  let component: IncidentesComponent;
  let fixture: ComponentFixture<IncidentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncidentesComponent]
    });
    fixture = TestBed.createComponent(IncidentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
