import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuropsicologiaPediatricaComponent } from './neuropsicologia-pediatrica.component';

describe('NeuropsicologiaPediatricaComponent', () => {
  let component: NeuropsicologiaPediatricaComponent;
  let fixture: ComponentFixture<NeuropsicologiaPediatricaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeuropsicologiaPediatricaComponent]
    });
    fixture = TestBed.createComponent(NeuropsicologiaPediatricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
