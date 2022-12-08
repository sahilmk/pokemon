import { GetMethod } from "../Util/ApiManager";
import { baseUrl } from "../Util/endpoints";

export const PokemonData = () => {
    return GetMethod(baseUrl);
}

