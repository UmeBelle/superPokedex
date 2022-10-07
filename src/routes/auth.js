const express = require("express");
const router = express.Router();
const { registro, login } = require("../controllers/auth");
const { obtenerPokemones } = require("../controllers/pokemones");
router.post("/login", login);
router.post("/registro", registro);


module.exports = router;