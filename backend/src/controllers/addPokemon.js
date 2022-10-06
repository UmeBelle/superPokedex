const db = require("../../db/index");

const addPokemon = async (req, res) => {
  try {
    const pokemon = req.body;
    console.log(pokemon);
    const poke = await db.query("select * from pokemon where name = $1", [
      pokemon.name,
    ]);

    if (poke.rowCount > 0) {
      return res.status(400).json({
        data: [],
        message: "Ya existe un pokemon con ese nombre, prueba con otro!",
        success: false,
      });
    }
    try {
      await db.query(
        "insert into pokemon (name, pokedexnumber, img, type1, type2, weight, height, move1, move2, details, hp, atk, def, satk, sdef, spd) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *",
        [
          pokemon["name"],
          pokemon["id"],
          pokemon["image"],
          pokemon["type1"],
          pokemon["type2"],
          pokemon["weight"],
          pokemon["height"],
          pokemon["ability1"],
          pokemon["ability2"],
          pokemon["flavor"],
          pokemon["hp"],
          pokemon["atk"],
          pokemon["def"],
          pokemon["satk"],
          pokemon["sdef"],
          pokemon["spe"],
        ]
      );
    } catch (error) {
      console.log("Errorsito " + error);
    }

    return res.status(200).json({
      message: "Pokemon creado correctamente",
      success: true,
    });
  } catch (error) {
    return res.send(error).status(500);
  }
};

module.exports = { addPokemon };
