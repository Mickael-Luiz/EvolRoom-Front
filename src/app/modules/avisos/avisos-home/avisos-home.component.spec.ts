import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisosHomeComponent } from './avisos-home.component';

describe('AvisosHomeComponent', () => {
  let component: AvisosHomeComponent;
  let fixture: ComponentFixture<AvisosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisosHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvisosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
