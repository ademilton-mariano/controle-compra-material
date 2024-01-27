import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprovadorComponent } from './aprovador.component';

describe('AprovadorComponent', () => {
  let component: AprovadorComponent;
  let fixture: ComponentFixture<AprovadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AprovadorComponent]
    });
    fixture = TestBed.createComponent(AprovadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
