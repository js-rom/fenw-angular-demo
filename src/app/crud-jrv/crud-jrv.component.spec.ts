import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudJrvComponent } from './crud-jrv.component';

describe('CrudJrvComponent', () => {
  let component: CrudJrvComponent;
  let fixture: ComponentFixture<CrudJrvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudJrvComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudJrvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
