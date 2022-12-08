import { useEffect } from "react"
import PokemonCard from "../../stories/PokemonCard"
import { PokemonData } from "../../APIs/PokemonApi"
import { GetMethod } from "../../Util/ApiManager"
import { baseUrl } from "../../Util/endpoints"
import style from './PokemonListing.module.scss'

export type PokemonType = {
    name: string,
    url: string
}

// export type AppRequiredDataType = {
//     pokemonName: string,
//     pokemonHeight: number,
//     pokemonWeight: number,
//     pokemonBaseExperience: number,
//     pokemonOrder: number,
//     pokemonAbility: PokemonType[]
// }

// export type PokemonDataType = {
//     abilities: any,
//     base_experience: number
//     forms: any
//     game_indices: any
//     height: any
//     held_items: any
//     id: any
//     is_default: boolean
//     location_area_encounters: any
//     moves: any
//     name: string
//     order: number
//     past_types: any
//     species: any
//     sprites: AnalyserNode
//     stats: any
//     types: any
//     weight: number
// }


function PokemonListing() {

    const getAllPokemonData = async () => {
        const localApi = localStorage.getItem('pokemonapis');
        if (localApi) {
            const allPokemonData: any = [];
            JSON.parse(localApi).map((pdata: PokemonType) => {
                GetMethod(`${baseUrl}/${pdata.name}`).then((result: any) => {
                    allPokemonData.push(result.data)
                    console.log(result.data)
                })
            })
            console.log(allPokemonData[0])
            // localStorage.setItem('allPokemon', JSON.stringify(allPokemonData))
        }
    }

    useEffect(() => {
        PokemonData().then((result: any) => {
            const allPokemon = result.data.results;
            const pokemonApis: PokemonType[] = [];
            allPokemon.map((pokemon: PokemonType) => {
                pokemonApis.push(pokemon)
            })

            localStorage.setItem('pokemonapis', JSON.stringify(pokemonApis));
        }).catch((err: any) => {
            alert(err.message)
        })
    }, [baseUrl]);


    return (
        <div>
            <h2 className={style.heading}>Welcome to Pokemon Application</h2>
            <PokemonCard iurl={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg"} pokemonName={0} pokemonHeight={0} pokemonWeight={0} abilities={['overgrow', 'chlorophyll']} />
        </div>
    )
}

export default PokemonListing


