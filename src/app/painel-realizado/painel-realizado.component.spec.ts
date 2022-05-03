import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelRealizadoComponent } from './painel-realizado.component';

describe('PainelRealizadoComponent', () => {
  let component: PainelRealizadoComponent;
  let fixture: ComponentFixture<PainelRealizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelRealizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelRealizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
