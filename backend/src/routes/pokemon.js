const express = require("express");
const { obtenerPokemones } = require("../controllers/pokemones");
const router = express.Router();

router.get("/", obtenerPokemones);

module.exports = router;