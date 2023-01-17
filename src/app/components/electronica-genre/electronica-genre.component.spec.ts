import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicaGenreComponent } from './electronica-genre.component';

describe('ElectronicaGenreComponent', () => {
  let component: ElectronicaGenreComponent;
  let fixture: ComponentFixture<ElectronicaGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicaGenreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicaGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
