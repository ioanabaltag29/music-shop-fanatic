import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoundtrackGenreComponent } from './soundtrack-genre.component';

describe('SoundtrackGenreComponent', () => {
  let component: SoundtrackGenreComponent;
  let fixture: ComponentFixture<SoundtrackGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoundtrackGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundtrackGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
