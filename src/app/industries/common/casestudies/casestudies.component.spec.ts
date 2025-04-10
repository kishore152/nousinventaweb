import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudiesComponent } from './casestudies.component';

describe('CasestudiesComponent', () => {
  let component: CasestudiesComponent;
  let fixture: ComponentFixture<CasestudiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasestudiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasestudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
