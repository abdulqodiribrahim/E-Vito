import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SewingDialogComponent } from './sewing-dialog.component';

describe('SewingDialogComponent', () => {
  let component: SewingDialogComponent;
  let fixture: ComponentFixture<SewingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SewingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SewingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
