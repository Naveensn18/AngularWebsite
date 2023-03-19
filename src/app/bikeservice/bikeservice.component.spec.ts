import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeserviceComponent } from './bikeservice.component';

describe('BikeserviceComponent', () => {
  let component: BikeserviceComponent;
  let fixture: ComponentFixture<BikeserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BikeserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BikeserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
