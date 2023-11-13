import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidateRegisterPage } from './validate-register.page';

describe('ValidateRegisterPage', () => {
  let component: ValidateRegisterPage;
  let fixture: ComponentFixture<ValidateRegisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ValidateRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
