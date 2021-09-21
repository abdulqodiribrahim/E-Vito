import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaldoKasDialogComponent } from './saldo-kas-dialog.component';

describe('SaldoKasDialogComponent', () => {
  let component: SaldoKasDialogComponent;
  let fixture: ComponentFixture<SaldoKasDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaldoKasDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaldoKasDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
