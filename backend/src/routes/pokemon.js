const express = require("express");
const { obtenerPokemones } = require("../controllers/pokemones");
const { verifyToken } = require("../middleware/jw-validate");
const router = express.Router();

router.get("/pokedex", verifyToken, obtenerPokemones);

module.exports = router;
