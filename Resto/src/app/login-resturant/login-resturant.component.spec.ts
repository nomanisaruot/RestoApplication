import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginResturantComponent } from './login-resturant.component';

describe('LoginResturantComponent', () => {
  let component: LoginResturantComponent;
  let fixture: ComponentFixture<LoginResturantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginResturantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginResturantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
