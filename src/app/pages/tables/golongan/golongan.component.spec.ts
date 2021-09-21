import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolonganComponent } from './golongan.component';

describe('GolonganComponent', () => {
  let component: GolonganComponent;
  let fixture: ComponentFixture<GolonganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolonganComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolonganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
