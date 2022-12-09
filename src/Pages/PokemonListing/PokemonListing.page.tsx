import { useEffect, useState } from "react"
import { Field, Form } from "react-final-form"
import { Grid, IconButton } from "@mui/material"
import { LoginType } from "../Loginpage/Loginpage.page"
import { Buttoncomp, Inputcomp } from "../../stories"
import { PokemonCard } from "../../stories"
import { Search } from "../../Icons"
import { PokemonData } from "../../APIs/PokemonApi"
import { GetMethod } from "../../Util/ApiManager"
import { baseUrl } from "../../Util/endpoints"
import { EbilitiesType, PokemonDataType } from "../PokemonDetail/PokemonDetail.page"
import style from './PokemonListing.module.scss'

export type PokemonType = {
    name: string,
    url: string
}

function PokemonListing({ loginState, setLoginState }: LoginType) {
    const [pokemonData, setPokemonData] = useState(localStorage.getItem('pokemonData') ? JSON.parse(localStorage.getItem('currentUser') || '[]') : []);

    useEffect(() => {
        PokemonData().then(async (result: any) => {
            const allPokemon = result.data.results;
            const pokemonApis: PokemonType[] = [];

            allPokemon.map((pokemon: PokemonType) => {
                pokemonApis.push(pokemon)
            });

            const allPokemonData: any = await Promise.all(
                pokemonApis.map(async pdata => {
                    const res = await GetMethod(`${baseUrl}/${pdata.name}`);
                    return res.data;
                })
            );

            localStorage.setItem('pokemonData', JSON.stringify(allPokemonData));
            setPokemonData(allPokemonData);

        }).catch((err: any) => {
            alert(err.message)
        })
    }, []);

    const handleLogout = () => {
        setLoginState(!loginState);
        localStorage.setItem('login', JSON.stringify(!loginState))
        localStorage.removeItem('pokemonData');
    }

    const onSubmit = () => {

    }

    const validate = (e: { search: string }) => {

        if (localStorage.getItem('pokemonData') && e.search !== '') {
            const localData = JSON.parse(localStorage.getItem('pokemonData') || "{}");

            const matchedData: PokemonDataType[] = [];

            // if (localData && e.search !== '') {
            localData.map((cardData: any) => {
                if (cardData.species.name.match(e.search)) {
                    matchedData.push(cardData);
                } else {
                    var dataFound = false;
                    const data = cardData.abilities.map((pability: EbilitiesType) => {
                        if (pability.ability.name.match(e.search)) {
                            dataFound = true;
                        }
                    })
                    if (dataFound) {
                        matchedData.push(cardData)
                    }
                }
            })

            // }
            setPokemonData(matchedData);
        }

        const errors: any = [];
        return errors;
    }

    return (
        <div>
            <div className={style.heading}>
                Welcome to Pokemon Application

                <Buttoncomp
                    buttonVariant={undefined}
                    buttonLabel={"Logout"}
                    type={"button"}
                    onClick={() => handleLogout()} />
            </div>

            <div className={style.searcharea}>
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    render={({ handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            <div className={style.flex}>
                                <div className={style.formcontrol}>
                                    <Field name='search'>
                                        {({ input, meta }) => (
                                            <div>
                                                <Inputcomp
                                                    inputLabel='Search...'
                                                    inputType='email'
                                                    inputColor='primary'
                                                    hasFullWidth={true}
                                                    {...input} />
                                                {meta.error && meta.touched && <span className={style.errorm}>{meta.error}</span>}
                                            </div>
                                        )}
                                    </Field>
                                </div>

                                <div className={style.formcontrol}>
                                    <IconButton>
                                        <Search
                                            iconHeight={'20px'}
                                            iconWidth={'20px'} />
                                    </IconButton>
                                </div>
                            </div>
                        </form>
                    )}
                />
            </div>

            <Grid container rowSpacing={2}>
                {
                    pokemonData.map((pokemon: any) => {
                        return <Grid item xs={4} key={pokemon.forms[0].name}>
                            <PokemonCard
                                iurl={pokemon.sprites.other.dream_world.front_default} pokemonName={pokemon.forms[0].name}
                                pokemonHeight={pokemon.height}
                                pokemonWeight={pokemon.weight}
                                abilities={pokemon.abilities.map((pability: any) => {
                                    return pability.ability.name
                                })} />
                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}

export default PokemonListing