import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhpBlogComponent } from './php-blog.component';

describe('PhpBlogComponent', () => {
  let component: PhpBlogComponent;
  let fixture: ComponentFixture<PhpBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhpBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhpBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
