import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembelianDialogComponent } from './pembelian-dialog.component';

describe('PembelianDialogComponent', () => {
  let component: PembelianDialogComponent;
  let fixture: ComponentFixture<PembelianDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PembelianDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PembelianDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
