import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesHomeComponent } from './preferences-home.component';

describe('PreferencesHomeComponent', () => {
  let component: PreferencesHomeComponent;
  let fixture: ComponentFixture<PreferencesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferencesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferencesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
