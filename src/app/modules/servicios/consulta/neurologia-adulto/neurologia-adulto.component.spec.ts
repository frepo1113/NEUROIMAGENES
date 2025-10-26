import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurologiaAdultoComponent } from './neurologia-adulto.component';

describe('NeurologiaAdultoComponent', () => {
  let component: NeurologiaAdultoComponent;
  let fixture: ComponentFixture<NeurologiaAdultoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeurologiaAdultoComponent]
    });
    fixture = TestBed.createComponent(NeurologiaAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
