import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuporteHomeComponent } from './suporte-home.component';

describe('SuporteHomeComponent', () => {
  let component: SuporteHomeComponent;
  let fixture: ComponentFixture<SuporteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuporteHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuporteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
