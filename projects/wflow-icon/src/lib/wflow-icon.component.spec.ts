import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WflowIconComponent } from './wflow-icon.component';

describe('WflowIconComponent', () => {
  let component: WflowIconComponent;
  let fixture: ComponentFixture<WflowIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WflowIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WflowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
