import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSlimComponent } from './button-slim.component';

describe('ButtonSlimComponent', () => {
  let component: ButtonSlimComponent;
  let fixture: ComponentFixture<ButtonSlimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonSlimComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonSlimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
