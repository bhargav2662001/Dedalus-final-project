import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacContentComponent } from './mac-content.component';

describe('MacContentComponent', () => {
  let component: MacContentComponent;
  let fixture: ComponentFixture<MacContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MacContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MacContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
