import request from "supertest";
import app from "../src/api/express";

describe("GET /invoice/:id", () => {
  it("should return an invoice", async () => {
    const response = await request(app).get("/invoice/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toBe(1);
  });

  it("should return 404 to non existing invoice", async () => {
    const response = await request(app).get("/invoice/999");
    expect(response.status).toBe(404);
  });
});