import './componente_css.css'
import './ComponenteTipos'
import { useState, useEffect } from 'react';
import ComponenteTipos from './ComponenteTipos';

export default function Componente(props) {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        async function pokemons() {
            const resposta = await fetch(props.url);
            const dados = await resposta.json();
            setPokemon(dados);
            
        }

        pokemons();
    }, [])

    if (!pokemon) {
        return (
            <p>carregando</p>
        )
    }

    else {

        const tipo = pokemon.types[0].type.name;
        const tipoPokemon = mudarTipo(tipo);
        return (
            <div className={`pokemon-card ${tipoPokemon}`}>
                <p className='pokemon-name'>{pokemon.name}</p>
                <img src={pokemon.sprites.front_default} alt="pokemons" className='pokemon-sprite'/>
                <div className='cards-tipos'>
                    <p className='card-tipo'>{pokemon.types.map(tipo => <ComponenteTipos tipo={tipo.type} />)}</p>
                </div>
            
            </div>
        );
    }
}

function mudarTipo(tipo) {
    switch (tipo) {
        case 'normal':
            return 'normal';
        case 'fire':
            return 'fire';
        case 'water':
            return 'water';
        case 'electric':
            return 'electric';
        case 'grass':
            return 'grass';
        case 'ice':
            return 'ice';
        case 'fighting':
            return 'fighting';
        case 'poison':
            return 'poison';
        case 'ground':
            return 'ground';
        case 'flying':
            return 'flying';
        case 'psychic':
            return 'psychic';
        case 'bug':
            return 'bug';
        case 'rock':
            return 'rock';
        case 'ghost':
            return 'ghost';
        case 'dragon':
            return 'dragon';
        default:
            return 'unknown';
    }
    
}