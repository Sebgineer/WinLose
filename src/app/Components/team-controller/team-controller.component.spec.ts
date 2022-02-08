import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamControllerComponent } from './team-controller.component';

describe('TeamControllerComponent', () => {
  let component: TeamControllerComponent;
  let fixture: ComponentFixture<TeamControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
