import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducajogosHomeComponent } from './educajogos-home.component';

describe('EducajogosHomeComponent', () => {
  let component: EducajogosHomeComponent;
  let fixture: ComponentFixture<EducajogosHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducajogosHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducajogosHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
