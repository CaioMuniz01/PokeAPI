const axios = require("axios");

// Substitua {name} pelo nome de um pokémon, por exemplo: 'pikachu'
const pokemonName = "pikachu";

axios
  .get(`https://pokeapi.co{pokemonName}`)
  .then((response) => {
    console.log("Dados do Pokémon:", response.data.name);
  })
  .catch((error) => {
    console.error("Erro ao buscar o pokémon:", error.message);
  });
