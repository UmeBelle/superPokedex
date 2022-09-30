const axios = require("axios");
const database = require("../db/index");

const API = "https://pokeapi.co/api/v2/pokemon/";

const fetchData = async () => {
  try {
    const data = await axios(API).then((res) => {
      return res.data;
    });

    console.log(data);

    data.results.map(async (poke) => {
      try {
        const pokemon = await axios.get(poke.url);
        const flavor = await axios.get(pokemon.data.species.url);
        console.log(pokemon);
        await database.query(
          "insert into pokemon (name, pokedexnumber, img, type1, type2, weight, height, move1, move2, details, hp, atk, def, satk, sdef, spd) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) return *",
          (pokemon.data.name,
          pokemon.data.id,
          pokemon.data.sprites.other["official-artwork"].front_default,
          pokemon.data.types[0].type.name,
          pokemon.data.types[1]?.type.name,
          pokemon.data.weight,
          pokemon.data.height,
          pokemon.data.abilities[0].ability.name,
          pokemon.data.abilities[1]?.ability.name,
          flavor.data.flavor_text_entries[0].flavor_text,
          pokemon.data.stats[0].base_stat,
          pokemon.data.stats[1].base_stat,
          pokemon.data.stats[2].base_stat,
          pokemon.data.stats[3].base_stat,
          pokemon.data.stats[4].base_stat,
          pokemon.data.stats[5].base_stat)
        );
      } catch (error) {
        throw error;
      }
    });
  } catch (error) {
    console.log(error);
  }
};

fetchData();
