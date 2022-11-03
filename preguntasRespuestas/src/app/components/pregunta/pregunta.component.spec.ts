import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntaComponent } from '../respuesta/pregunta.component';

describe('PreguntaComponent', () => {
  let component: PreguntaComponent;
  let fixture: ComponentFixture<PreguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
