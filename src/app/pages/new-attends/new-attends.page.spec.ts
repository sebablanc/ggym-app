import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewAttendsPage } from './new-attends.page';

describe('NewAttendsPage', () => {
  let component: NewAttendsPage;
  let fixture: ComponentFixture<NewAttendsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewAttendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
