import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbercardComponent } from './numbercard.component';

describe('NumbercardComponent', () => {
  let component: NumbercardComponent;
  let fixture: ComponentFixture<NumbercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumbercardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumbercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
