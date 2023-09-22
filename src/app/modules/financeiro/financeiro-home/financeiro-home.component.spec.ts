import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroHomeComponent } from './financeiro-home.component';

describe('FinanceiroHomeComponent', () => {
  let component: FinanceiroHomeComponent;
  let fixture: ComponentFixture<FinanceiroHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceiroHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceiroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
