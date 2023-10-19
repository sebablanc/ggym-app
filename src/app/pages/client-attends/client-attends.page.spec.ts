import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientAttendsPage } from './client-attends.page';

describe('ClientAttendsPage', () => {
  let component: ClientAttendsPage;
  let fixture: ComponentFixture<ClientAttendsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClientAttendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
