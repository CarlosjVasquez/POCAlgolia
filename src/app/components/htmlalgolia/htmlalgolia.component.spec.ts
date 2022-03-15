import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlalgoliaComponent } from './htmlalgolia.component';

describe('HtmlalgoliaComponent', () => {
  let component: HtmlalgoliaComponent;
  let fixture: ComponentFixture<HtmlalgoliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlalgoliaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlalgoliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
