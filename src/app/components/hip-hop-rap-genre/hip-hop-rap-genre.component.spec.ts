import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipHopRapGenreComponent } from './hip-hop-rap-genre.component';

describe('HipHopRapGenreComponent', () => {
  let component: HipHopRapGenreComponent;
  let fixture: ComponentFixture<HipHopRapGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipHopRapGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipHopRapGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
