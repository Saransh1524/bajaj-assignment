const request = require("supertest");
const app = require("../index");

describe("BFHL API Tests", () => {
  it("should return valid response for Example A", async () => {
    const res = await request(app)
      .post("/bfhl")
      .send({ data: ["a", "1", "334", "4", "R", "$"] });

    expect(res.statusCode).toBe(200);
    expect(res.body.is_success).toBe(true);
    expect(res.body.even_numbers).toEqual(["334", "4"]);
    expect(res.body.odd_numbers).toEqual(["1"]);
    expect(res.body.alphabets).toEqual(["A", "R"]);
    expect(res.body.special_characters).toEqual(["$"]);
    expect(res.body.sum).toBe("339");
  });

  it("should handle invalid input gracefully", async () => {
    const res = await request(app).post("/bfhl").send({ wrongKey: [] });
    expect(res.statusCode).toBe(400);
    expect(res.body.is_success).toBe(false);
  });
});
