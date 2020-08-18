import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterObservationsComponent } from './master-observations.component';

describe('MasterObservationsComponent', () => {
  let component: MasterObservationsComponent;
  let fixture: ComponentFixture<MasterObservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterObservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterObservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
