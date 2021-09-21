import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurcaseOrderComponent } from './purcase-order.component';

describe('PurcaseOrderComponent', () => {
  let component: PurcaseOrderComponent;
  let fixture: ComponentFixture<PurcaseOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurcaseOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurcaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
