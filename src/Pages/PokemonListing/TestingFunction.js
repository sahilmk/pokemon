export const TestMatchData = (search) => {
  const localData = JSON.parse(localStorage.getItem("pokemonData") || "{}");

  if (search) {
    const matchedData = [];

    localData.map((cardData) => {
      if (
        cardData.species.name.toLowerCase().match(search.toLowerCase().trim())
      ) {
        matchedData.push(cardData);
      } else {
        var dataFound = false;
        cardData.abilities.map((pability) => {
          if (pability.ability.name.toLowerCase().match(search.toLowerCase())) {
            dataFound = true;
          }
        });
        if (dataFound) {
          matchedData.push(cardData);
        }
      }
    });

    return matchedData;
  } else {
    return localData;
  }
};
