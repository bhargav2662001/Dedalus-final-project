import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvContentComponent } from './tv-content.component';

describe('TvContentComponent', () => {
  let component: TvContentComponent;
  let fixture: ComponentFixture<TvContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
