const request = require("supertest");
const app = require("./app");
let token = "";

describe("Pruebas unitarias de la aplicación", () => {
  test("Ingresa user", async () => {
    const response = await request(app)
      .post("/auth/login")
      .send({ username: "1234", password: "1234" });
    expect(response.statusCode).toBe(200);
    token = response.body.token;
  });

  test("Obtener todos los pokemon", async () => {
    const response = await (
      await request(app).get("/pokemon/pokedex")
    ).header({ ["auth-token"]: token });
    expect(response.statusCode).toBe(200);
  });
});
