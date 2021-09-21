import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingDialogComponent } from './cutting-dialog.component';

describe('CuttingDialogComponent', () => {
  let component: CuttingDialogComponent;
  let fixture: ComponentFixture<CuttingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuttingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
