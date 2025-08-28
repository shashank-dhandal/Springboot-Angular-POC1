import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskApi } from './task-api';

describe('TaskApi', () => {
  let component: TaskApi;
  let fixture: ComponentFixture<TaskApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskApi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
