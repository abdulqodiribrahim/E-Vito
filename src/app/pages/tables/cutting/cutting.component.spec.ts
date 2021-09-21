import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuttingComponent } from './cutting.component';

describe('CuttingComponent', () => {
  let component: CuttingComponent;
  let fixture: ComponentFixture<CuttingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuttingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuttingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
