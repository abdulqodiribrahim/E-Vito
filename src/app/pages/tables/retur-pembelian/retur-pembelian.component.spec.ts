import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturPembelianComponent } from './retur-pembelian.component';

describe('ReturPembelianComponent', () => {
  let component: ReturPembelianComponent;
  let fixture: ComponentFixture<ReturPembelianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturPembelianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturPembelianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
