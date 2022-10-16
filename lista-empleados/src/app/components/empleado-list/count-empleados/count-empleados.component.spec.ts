import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEmpleadosComponent } from './count-empleados.component';

describe('CountEmpleadosComponent', () => {
  let component: CountEmpleadosComponent;
  let fixture: ComponentFixture<CountEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountEmpleadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
