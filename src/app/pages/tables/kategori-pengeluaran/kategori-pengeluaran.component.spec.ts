import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KategoriPengeluaranComponent } from './kategori-pengeluaran.component';

describe('KategoriPengeluaranComponent', () => {
  let component: KategoriPengeluaranComponent;
  let fixture: ComponentFixture<KategoriPengeluaranComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KategoriPengeluaranComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KategoriPengeluaranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
