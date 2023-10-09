import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdugamesHomeComponent } from './edugames-home.component';

describe('EdugamesHomeComponent', () => {
  let component: EdugamesHomeComponent;
  let fixture: ComponentFixture<EdugamesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdugamesHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EdugamesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
