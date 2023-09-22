import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferenciasHomeComponent } from './preferencias-home.component';

describe('PreferenciasHomeComponent', () => {
  let component: PreferenciasHomeComponent;
  let fixture: ComponentFixture<PreferenciasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferenciasHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferenciasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
