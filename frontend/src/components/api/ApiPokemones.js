import api from "./Api";

const pokemons = {
  getPokemones: async () => {
    const url = "/pokemon/pokedex";
    return await api
      .get(url)
      .then((res) => {
        console.log("respuesta");
        console.log(res.data.pokemones);
        if (res.data.pokemones.length > 0) {
          return res.data.pokemones;
        } else {
          alert("No hay pokemones");
        }
      })
      .catch((error) => {
      alert("Se produjo un error inesperado:  "   + error);
      });
  },
};
export default pokemons;
