import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnyComponent } from './any.component';

describe('AnyComponent', () => {
  let component: AnyComponent;
  let fixture: ComponentFixture<AnyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
