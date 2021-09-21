import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangDialogComponent } from './barang-dialog.component';

describe('BarangDialogComponent', () => {
  let component: BarangDialogComponent;
  let fixture: ComponentFixture<BarangDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarangDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarangDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
