import { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Buttoncomp } from '../../stories';
import { PokemonType } from '../PokemonListing/PokemonListing.page';
import style from './PokemonDetail.module.scss';

export type EbilitiesType = {
    ability: PokemonType
    is_hidden: boolean
    slot: number
}

export type PokemonDataType = {
    abilities: any
    base_experience: number
    forms: PokemonType[]
    game_indices: any[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: any[]
    name: string
    order: number
    past_types: any[]
    species: PokemonType
    sprites: any
    stats: any[]
    types: any[]
    weight: number
}

function PokemonDetail() {
    const { name } = useParams();
    const navigate = useNavigate();
    const [pokemonData, setPokemonData] = useState<PokemonDataType>();

    const handleClick = () => {
        navigate('/')
    }

    useEffect(() => {
        const localData = JSON.parse(localStorage.getItem('pokemonData') || '{}');

        localData.map((pokemon: any) => {
            if (pokemon.species.name === name) {
                setPokemonData(pokemon)
            }
        })

    }, [])

    return (
        <div>
            <h2 className={style.heading}>Welcome to Pokemon Application</h2>

            <h3>Pokemon Details</h3>

            <div className={style.buttoncolor}>
                <Buttoncomp
                    buttonVariant={undefined}
                    buttonLabel={'Go Back'}
                    type={'button'}
                    buttonColor={'inherit'}
                    buttonSize='large'
                    onClick={() => handleClick()} />
            </div>

            <div className={style.pokemonDetail}>
                {
                    pokemonData &&
                    <>
                        <img src={pokemonData.sprites.other.dream_world.front_default} alt="" />

                        <div className={style.middleData}>
                            <div className={style.flexdiv}>
                                <span className={style.label}>Name: </span>
                                <span className='value'>{pokemonData.species.name}</span>
                            </div>
                            <div className={style.flexdiv}>
                                <span className={style.label}>Height: </span>
                                <span className='value'>{pokemonData.height}</span>
                            </div>
                            <div className={style.flexdiv}>
                                <span className={style.label}>Weight: </span>
                                <span className='value'>{pokemonData.weight}</span>
                            </div>
                            <div className={style.flexdiv}>
                                <span className={style.label}>Base Experience: </span>
                                <span className='value'>{pokemonData.base_experience}</span>
                            </div>
                            <div className={style.flexdiv}>
                                <span className={style.label}>Order: </span>
                                <span className='value'>{pokemonData.order}</span>
                            </div>
                            <div className={style.label}>
                                List of abilities:
                            </div>
                            <div className={style.ability}>
                                {
                                    pokemonData.abilities.map((pability: EbilitiesType, index: number) => {
                                        return <p key={index}>{index + 1}.{pability.ability.name}</p>
                                    })
                                }
                            </div>
                        </div>
                    </>
                }
            </div>

        </div>
    )
}

export default PokemonDetail
