import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoKasComponent } from './saldo-kas.component';

describe('SaldoKasComponent', () => {
  let component: SaldoKasComponent;
  let fixture: ComponentFixture<SaldoKasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoKasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoKasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
