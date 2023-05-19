import supertest from "supertest";
import app, { init, close } from "../../src/app";

const supertestServer = supertest(app);

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await close();
});

describe("POST /users", () => {
  it("Should create one user and return status 201", async () => {
    const result = await supertestServer.post("/users").send({
      name: "Thiago Lima",
      email: "thi4@email.com",
      password: "1234",
      image: "Teste",
      admin: true,
    });

    expect(result.statusCode).toBe(201);
  });
});
