import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFinalizeOrderComponent } from './page-finalize-order.component';

describe('PageFinalizeOrderComponent', () => {
  let component: PageFinalizeOrderComponent;
  let fixture: ComponentFixture<PageFinalizeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageFinalizeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFinalizeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
