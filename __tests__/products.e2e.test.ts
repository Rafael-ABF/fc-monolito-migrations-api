import request from "supertest";
import app from "../src/api/express";

describe("POST /products", () => {
  it("should create a product", async () => {
    const response = await request(app)
      .post("/products")
      .send({ name: "Produto Teste", price: 100 });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body.name).toBe("Produto Teste");
  });
});