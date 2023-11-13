import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecoverPasswordViaEmailPage } from './recover-password-via-email.page';

describe('RecoverPasswordViaEmailPage', () => {
  let component: RecoverPasswordViaEmailPage;
  let fixture: ComponentFixture<RecoverPasswordViaEmailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecoverPasswordViaEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
