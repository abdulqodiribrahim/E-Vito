import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SatuanDialogComponent } from './satuan-dialog.component';

describe('SatuanDialogComponent', () => {
  let component: SatuanDialogComponent;
  let fixture: ComponentFixture<SatuanDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SatuanDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SatuanDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
