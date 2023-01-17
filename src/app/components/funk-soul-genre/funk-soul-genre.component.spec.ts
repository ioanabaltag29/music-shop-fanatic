import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunkSoulGenreComponent } from './funk-soul-genre.component';

describe('FunkSoulGenreComponent', () => {
  let component: FunkSoulGenreComponent;
  let fixture: ComponentFixture<FunkSoulGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunkSoulGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunkSoulGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
