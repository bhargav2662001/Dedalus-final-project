import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpadContentComponent } from './ipad-content.component';

describe('IpadContentComponent', () => {
  let component: IpadContentComponent;
  let fixture: ComponentFixture<IpadContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpadContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
