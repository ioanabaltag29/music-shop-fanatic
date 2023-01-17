import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoGenreComponent } from './disco-genre.component';

describe('DiscoGenreComponent', () => {
  let component: DiscoGenreComponent;
  let fixture: ComponentFixture<DiscoGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
