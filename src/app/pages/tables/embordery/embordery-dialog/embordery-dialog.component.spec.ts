import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmborderyDialogComponent } from './embordery-dialog.component';

describe('EmborderyDialogComponent', () => {
  let component: EmborderyDialogComponent;
  let fixture: ComponentFixture<EmborderyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmborderyDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmborderyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
