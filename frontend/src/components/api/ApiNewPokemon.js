import api from "./Api";

const sendNewPokemon = async (data) => {
  const url = "/pokedex/newentry";
  return await api
    .post(url, data)
    .then((res) => {
      console.log("respuesta " + res);
      alert(res.message);
    })
    .catch((error) => {
      alert(error);
    });
};

export default sendNewPokemon;
