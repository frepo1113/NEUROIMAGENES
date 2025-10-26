import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropsicologiaAdultoComponent } from './neuropsicologia-adulto.component';

describe('NeuropsicologiaAdultoComponent', () => {
  let component: NeuropsicologiaAdultoComponent;
  let fixture: ComponentFixture<NeuropsicologiaAdultoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuropsicologiaAdultoComponent]
    });
    fixture = TestBed.createComponent(NeuropsicologiaAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
