import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCompJrvComponent } from './sub-comp-jrv.component';

describe('SubCompJrvComponent', () => {
  let component: SubCompJrvComponent;
  let fixture: ComponentFixture<SubCompJrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubCompJrvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubCompJrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
