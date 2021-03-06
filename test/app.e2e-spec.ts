import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { initServerTesting } from "./helpers/init-server";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeEach(async () => {
    app = await initServerTesting();
  });

  it("/ (GET)", () => {
    return request(app.getHttpServer())
      .get("/")
      .expect(200)
      .expect({
        "data": "Hello World!",
        "message": "get susccessfull"
      });
  });
});
