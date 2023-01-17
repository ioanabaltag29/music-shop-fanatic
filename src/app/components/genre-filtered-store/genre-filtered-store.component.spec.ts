import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreFilteredStoreComponent } from './genre-filtered-store.component';

describe('GenreFilteredStoreComponent', () => {
  let component: GenreFilteredStoreComponent;
  let fixture: ComponentFixture<GenreFilteredStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenreFilteredStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreFilteredStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
