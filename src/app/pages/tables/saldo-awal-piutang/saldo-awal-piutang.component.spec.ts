import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoAwalPiutangComponent } from './saldo-awal-piutang.component';

describe('SaldoAwalPiutangComponent', () => {
  let component: SaldoAwalPiutangComponent;
  let fixture: ComponentFixture<SaldoAwalPiutangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoAwalPiutangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoAwalPiutangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
