import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockGenreComponent } from './rock-genre.component';

describe('RockGenreComponent', () => {
  let component: RockGenreComponent;
  let fixture: ComponentFixture<RockGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RockGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
