import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleformComponent } from './articleform.component';

describe('ArticleformComponent', () => {
  let component: ArticleformComponent;
  let fixture: ComponentFixture<ArticleformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
