import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdDetailsComponent } from './cd-details.component';

describe('CdDetailsComponent', () => {
  let component: CdDetailsComponent;
  let fixture: ComponentFixture<CdDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CdDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
