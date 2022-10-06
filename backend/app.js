const express = require("express");
const app = express();
const pokemonRoute = require("./src/routes/pokemon");
const addPokemon = require("./src/routes/addPokemon");
const auth = require("./src/routes/auth");
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola");
});
app.post("/registro", (req, res) => {});
app.use("/auth", auth);
app.use("/pokemon", pokemonRoute);
app.use("/pokedex", addPokemon);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

module.exports = app;
