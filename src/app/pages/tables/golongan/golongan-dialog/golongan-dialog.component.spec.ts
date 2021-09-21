import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolonganDialogComponent } from './golongan-dialog.component';

describe('GolonganDialogComponent', () => {
  let component: GolonganDialogComponent;
  let fixture: ComponentFixture<GolonganDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolonganDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolonganDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
