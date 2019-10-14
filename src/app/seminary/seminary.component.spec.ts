import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminaryComponent } from './seminary.component';

describe('SeminaryComponent', () => {
  let component: SeminaryComponent;
  let fixture: ComponentFixture<SeminaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeminaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeminaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
