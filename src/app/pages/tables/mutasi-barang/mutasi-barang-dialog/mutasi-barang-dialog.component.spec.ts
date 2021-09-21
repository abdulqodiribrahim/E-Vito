import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutasiBarangDialogComponent } from './mutasi-barang-dialog.component';

describe('MutasiBarangDialogComponent', () => {
  let component: MutasiBarangDialogComponent;
  let fixture: ComponentFixture<MutasiBarangDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutasiBarangDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutasiBarangDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
