import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GudangDialogComponent } from './gudang-dialog.component';

describe('GudangDialogComponent', () => {
  let component: GudangDialogComponent;
  let fixture: ComponentFixture<GudangDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GudangDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GudangDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
