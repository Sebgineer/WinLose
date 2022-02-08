import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlistPlayerComponent } from './plist-player.component';

describe('PlistPlayerComponent', () => {
  let component: PlistPlayerComponent;
  let fixture: ComponentFixture<PlistPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlistPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlistPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
