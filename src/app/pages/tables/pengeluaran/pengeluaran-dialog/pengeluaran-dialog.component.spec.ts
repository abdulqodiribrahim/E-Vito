import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PengeluaranDialogComponent } from './pengeluaran-dialog.component';

describe('PengeluaranDialogComponent', () => {
  let component: PengeluaranDialogComponent;
  let fixture: ComponentFixture<PengeluaranDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PengeluaranDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PengeluaranDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
