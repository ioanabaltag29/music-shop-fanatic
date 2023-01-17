import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RbGenreComponent } from './rb-genre.component';

describe('RbGenreComponent', () => {
  let component: RbGenreComponent;
  let fixture: ComponentFixture<RbGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RbGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RbGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
