import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropsicologiaPediatricoComponent } from './neuropsicologia-pediatrico.component';

describe('NeuropsicologiaPediatricoComponent', () => {
  let component: NeuropsicologiaPediatricoComponent;
  let fixture: ComponentFixture<NeuropsicologiaPediatricoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuropsicologiaPediatricoComponent]
    });
    fixture = TestBed.createComponent(NeuropsicologiaPediatricoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
