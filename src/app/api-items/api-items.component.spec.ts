import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiItemsComponent } from './api-items.component';

describe('ApiItemsComponent', () => {
  let component: ApiItemsComponent;
  let fixture: ComponentFixture<ApiItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
