import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserverJrvComponent } from './observer-jrv.component';

describe('ObserverJrvComponent', () => {
  let component: ObserverJrvComponent;
  let fixture: ComponentFixture<ObserverJrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserverJrvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserverJrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
