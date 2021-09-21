import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoAwalPiutangDialogComponent } from './saldo-awal-piutang-dialog.component';

describe('SaldoAwalPiutangDialogComponent', () => {
  let component: SaldoAwalPiutangDialogComponent;
  let fixture: ComponentFixture<SaldoAwalPiutangDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoAwalPiutangDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoAwalPiutangDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
