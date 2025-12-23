import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessfullComponent } from './sucessfull.component';

describe('SucessfullComponent', () => {
  let component: SucessfullComponent;
  let fixture: ComponentFixture<SucessfullComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SucessfullComponent]
    });
    fixture = TestBed.createComponent(SucessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
