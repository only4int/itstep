import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotelistComponent } from './notelist.component';

describe('NotelistComponent', () => {
  let component: NotelistComponent;
  let fixture: ComponentFixture<NotelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotelistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
