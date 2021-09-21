import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOpnameDialogComponent } from './stock-opname-dialog.component';

describe('StockOpnameDialogComponent', () => {
  let component: StockOpnameDialogComponent;
  let fixture: ComponentFixture<StockOpnameDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockOpnameDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOpnameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
