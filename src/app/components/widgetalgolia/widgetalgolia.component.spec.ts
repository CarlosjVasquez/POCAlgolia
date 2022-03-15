import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetalgoliaComponent } from './widgetalgolia.component';

describe('WidgetalgoliaComponent', () => {
  let component: WidgetalgoliaComponent;
  let fixture: ComponentFixture<WidgetalgoliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetalgoliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetalgoliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
