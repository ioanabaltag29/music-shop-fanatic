import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JazzBluesGenreComponent } from './jazz-blues-genre.component';

describe('JazzBluesGenreComponent', () => {
  let component: JazzBluesGenreComponent;
  let fixture: ComponentFixture<JazzBluesGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JazzBluesGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JazzBluesGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
