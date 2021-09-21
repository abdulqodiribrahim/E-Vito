import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PembayaranHarianComponent } from './pembayaran-harian.component';

describe('PembayaranHarianComponent', () => {
  let component: PembayaranHarianComponent;
  let fixture: ComponentFixture<PembayaranHarianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PembayaranHarianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PembayaranHarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
