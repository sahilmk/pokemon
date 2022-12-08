import { Card } from "./PokemonCard.styled"

export type PokemonCardType = {
    iurl: string,
    pokemonName: number,
    pokemonHeight: number
    pokemonWeight: number,
    abilities: string[]
}

function PokemonCard({
    iurl,
    pokemonName,
    pokemonHeight,
    pokemonWeight,
    abilities }: PokemonCardType) {
    return (
        <Card>
            <img src={iurl} alt="img" />
            <div className="flexdiv">
                <span className='label'>Name: </span>
                <span className='value'>{pokemonName}</span>
            </div>
            <div className="flexdiv">
                <span className='label'>Height: </span>
                <span className='value'>{pokemonHeight}</span>
            </div>
            <div className="flexdiv">
                <span className='label'>Weight: </span>
                <span className='value'>{pokemonWeight}</span>
            </div>
            <div className='label flexdiv'>
                List of abilities:
            </div>
            <div className="ability flexdiv">
                {
                    abilities.map((ability) => {
                        return <p key={ability} className="abilitybutton">{ability}</p>
                    })
                }
            </div>
        </Card>
    )
}

export default PokemonCard
