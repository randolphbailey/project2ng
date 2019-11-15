import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { JradUserService } from "./jrad-user.service";

describe("JradUserService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it("should be created", () => {
    const service: JradUserService = TestBed.get(JradUserService);
    expect(service).toBeTruthy();
  });
});
