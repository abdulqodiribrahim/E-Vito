import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmborderyComponent } from './embordery.component';

describe('EmborderyComponent', () => {
  let component: EmborderyComponent;
  let fixture: ComponentFixture<EmborderyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmborderyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmborderyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
