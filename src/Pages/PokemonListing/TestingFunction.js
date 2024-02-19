import axios from "axios";

function TestMatchData(a, b) {
  // try {
  //   let localData = [];
  //   axios.get("https://pokeapi.co/api/v2/pokemon").then(async (result) => {
  //     const allPokemon = result.data.results;
  //     const pokemonApis = [];
  //     allPokemon.map((pokemon) => {
  //       pokemonApis.push(pokemon);
  //     });
  //     const allPokemonData = await Promise.all(
  //       pokemonApis.map(async (pdata) => {
  //         const res = await axios.get(`${baseUrl}/${pdata.name}`);
  //         return res.data;
  //       })
  //     );
  //     localData = allPokemon;
  //   });
  //   if (search) {
  //     const matchedData = [];
  //     localData.map((cardData) => {
  //       if (
  //         cardData.species.name.toLowerCase().match(search.toLowerCase().trim())
  //       ) {
  //         matchedData.push(cardData);
  //       } else {
  //         var dataFound = false;
  //         cardData.abilities.map((pability) => {
  //           if (
  //             pability.ability.name.toLowerCase().match(search.toLowerCase())
  //           ) {
  //             dataFound = true;
  //           }
  //         });
  //         if (dataFound) {
  //           matchedData.push(cardData);
  //         }
  //       }
  //     });
  //     return matchedData;
  //   } else {
  //     return localData;
  //   }
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   return null;
  // }
  return a + b;
}

export default TestMatchData;
