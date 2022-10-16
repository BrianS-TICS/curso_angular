import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoListComponent } from './empleado-list.component';

describe('EmpleadoListComponent', () => {
  let component: EmpleadoListComponent;
  let fixture: ComponentFixture<EmpleadoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
