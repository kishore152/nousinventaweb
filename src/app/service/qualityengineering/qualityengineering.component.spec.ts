import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityengineeringComponent } from './qualityengineering.component';

describe('QualityengineeringComponent', () => {
  let component: QualityengineeringComponent;
  let fixture: ComponentFixture<QualityengineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QualityengineeringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualityengineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
