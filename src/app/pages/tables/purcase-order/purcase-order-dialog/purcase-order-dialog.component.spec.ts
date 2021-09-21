import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcaseOrderDialogComponent } from './purcase-order-dialog.component';

describe('PurcaseOrderDialogComponent', () => {
  let component: PurcaseOrderDialogComponent;
  let fixture: ComponentFixture<PurcaseOrderDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurcaseOrderDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcaseOrderDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
