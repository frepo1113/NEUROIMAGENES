import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurologiaPediatricaComponent } from './neurologia-pediatrica.component';

describe('NeurologiaPediatricaComponent', () => {
  let component: NeurologiaPediatricaComponent;
  let fixture: ComponentFixture<NeurologiaPediatricaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeurologiaPediatricaComponent]
    });
    fixture = TestBed.createComponent(NeurologiaPediatricaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
