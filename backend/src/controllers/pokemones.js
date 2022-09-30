const db = require("../../db/index");
const obtenerPokemones = async (req, res, next) => {
  try {
    const pokemones = await db.query("select * from pokemon");
    return res
      .status(200)
      .json({ data: pokemones.rows, message: "Todas las pokemones" });
  } catch (error) {
    return next(error);
  }
};
module.exports = { obtenerPokemones };

