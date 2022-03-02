import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuagechartsComponent } from './guagecharts.component';

describe('GuagechartsComponent', () => {
  let component: GuagechartsComponent;
  let fixture: ComponentFixture<GuagechartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuagechartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuagechartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
