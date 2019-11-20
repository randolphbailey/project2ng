import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PoststructureComponent } from "./poststructure.component";

describe("PoststructureComponent", () => {
  let component: PoststructureComponent;
  let fixture: ComponentFixture<PoststructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PoststructureComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoststructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
