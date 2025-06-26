import request from "supertest";
import app from "../src/api/express";

describe("POST /checkout", () => {
  it("should successfully perform a checkout", async () => {
    const response = await request(app)
      .post("/checkout")
      .send({ clientId: 1, products: [{ id: 1, quantity: 2 }] });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.clientId).toBe(1);
  });
});