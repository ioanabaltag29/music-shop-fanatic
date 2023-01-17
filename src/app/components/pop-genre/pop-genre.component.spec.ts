import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopGenreComponent } from './pop-genre.component';

describe('PopGenreComponent', () => {
  let component: PopGenreComponent;
  let fixture: ComponentFixture<PopGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
