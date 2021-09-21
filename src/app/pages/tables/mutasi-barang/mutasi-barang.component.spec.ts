import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MutasiBarangComponent } from './mutasi-barang.component';

describe('MutasiBarangComponent', () => {
  let component: MutasiBarangComponent;
  let fixture: ComponentFixture<MutasiBarangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MutasiBarangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MutasiBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
