import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclehooksComponent } from './lifecyclehooks.component';

describe('LifecyclehooksComponent', () => {
  let component: LifecyclehooksComponent;
  let fixture: ComponentFixture<LifecyclehooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LifecyclehooksComponent]
    });
    fixture = TestBed.createComponent(LifecyclehooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
