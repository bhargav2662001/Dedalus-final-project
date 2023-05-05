import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IphoneContentComponent } from './iphone-content.component';

describe('IphoneContentComponent', () => {
  let component: IphoneContentComponent;
  let fixture: ComponentFixture<IphoneContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IphoneContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IphoneContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
