const express = require("express");
const { addPokemon } = require("../controllers/addPokemon");
const { verifyToken } = require("../middleware/jw-validate");
const router = express.Router();

router.post("/newentry", verifyToken, addPokemon);

module.exports = router;
