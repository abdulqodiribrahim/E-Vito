import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishingDialogComponent } from './finishing-dialog.component';

describe('FinishingDialogComponent', () => {
  let component: FinishingDialogComponent;
  let fixture: ComponentFixture<FinishingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
