import { TestBed } from "@angular/core/testing";

import { RecipeService } from "./recipe.service";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { HttpClient } from "@angular/common/http";

describe("RecipeService", () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    const service: RecipeService = TestBed.get(RecipeService);
    expect(service).toBeTruthy();
  });
});
