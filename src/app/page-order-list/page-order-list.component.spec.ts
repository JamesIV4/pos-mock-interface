import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOrderListComponent } from './page-order-list.component';

describe('PageOrderListComponent', () => {
  let component: PageOrderListComponent;
  let fixture: ComponentFixture<PageOrderListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOrderListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOrderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
