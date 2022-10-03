import api from "./Api";

const pokemons = {
    getPokemones: () => {
        const url = "/pokemon/pokedex";
        return api.get(url)
            .then((res) => {
                console.log(res);
                console.log('respuesta')
                if (res.data.data.length > 0) {
                    return res.data.data;
                }
                else {
                    alert('No hay pokemones');
                }
            })
            .catch((error) => {
                alert(error)
            })
    }

}
export default pokemons;