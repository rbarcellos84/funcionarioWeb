import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaFuncionarioComponent } from './consulta-funcionario.component';

describe('ConsultaFuncionarioComponent', () => {
  let component: ConsultaFuncionarioComponent;
  let fixture: ComponentFixture<ConsultaFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaFuncionarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
