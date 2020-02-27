import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundingsComponent } from './fundings.component';

describe('FundingsComponent', () => {
  let component: FundingsComponent;
  let fixture: ComponentFixture<FundingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
