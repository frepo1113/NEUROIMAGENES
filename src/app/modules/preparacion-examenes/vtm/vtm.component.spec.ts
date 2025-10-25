import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtmComponent } from './vtm.component';

describe('VtmComponent', () => {
  let component: VtmComponent;
  let fixture: ComponentFixture<VtmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VtmComponent]
    });
    fixture = TestBed.createComponent(VtmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
