import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsLoadingComponent } from './results-loading.component';

describe('ResultsLoadingComponent', () => {
  let component: ResultsLoadingComponent;
  let fixture: ComponentFixture<ResultsLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
