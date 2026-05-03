import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUsers } from './api-users';

describe('ApiUsers', () => {
  let component: ApiUsers;
  let fixture: ComponentFixture<ApiUsers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiUsers],
    }).compileComponents();

    fixture = TestBed.createComponent(ApiUsers);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
