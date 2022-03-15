import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectserverComponent } from './directserver.component';

describe('DirectserverComponent', () => {
  let component: DirectserverComponent;
  let fixture: ComponentFixture<DirectserverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectserverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
