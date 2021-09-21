import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriPengeluranDialogComponent } from './kategori-pengeluran-dialog.component';

describe('KategoriPengeluranDialogComponent', () => {
  let component: KategoriPengeluranDialogComponent;
  let fixture: ComponentFixture<KategoriPengeluranDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategoriPengeluranDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriPengeluranDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
