import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PegawaiDialogComponent } from './pegawai-dialog.component';

describe('PegawaiDialogComponent', () => {
  let component: PegawaiDialogComponent;
  let fixture: ComponentFixture<PegawaiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PegawaiDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PegawaiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
