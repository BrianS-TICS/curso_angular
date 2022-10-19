import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCitasComponent } from './crear-citas.component';

describe('CrearCitasComponent', () => {
  let component: CrearCitasComponent;
  let fixture: ComponentFixture<CrearCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
