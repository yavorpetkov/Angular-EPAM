import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInteractComponent } from './postInteract.component';

describe('EditComponent', () => {
  let component: PostInteractComponent;
  let fixture: ComponentFixture<PostInteractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostInteractComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInteractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
