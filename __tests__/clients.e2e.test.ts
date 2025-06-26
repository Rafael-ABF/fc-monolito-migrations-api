import request from "supertest";
import app from "../src/api/express";

describe("POST /clients", () => {
  it("should create a client", async () => {
    const response = await request(app)
      .post("/clients")
      .send({ name: "Cliente Teste", email: "rafael@email.com" });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Cliente Teste");
  });
});