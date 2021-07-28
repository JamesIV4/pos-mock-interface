import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageItemPickerComponent } from './page-item-picker.component';

describe('PageItemPickerComponent', () => {
  let component: PageItemPickerComponent;
  let fixture: ComponentFixture<PageItemPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageItemPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageItemPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
