import { types } from '../types/types';

export const getPokemons = (url) => {
    return async (dispatch) => {
        const resp = await fetch(url);
        const characters = await resp.json();

        dispatch(pokemons(characters.results));
    };
};

export const getPokemonInfo = (url) => {
    return async (dispatch) => {
        const resp = await fetch(url);
        const characterInfo = await resp.json();

        dispatch(pokemonInfo(characterInfo));
    };
};

const pokemonInfo = (pokemon) => ({
    type: types.getPokemonInfo,
    payload: pokemon,
});

const pokemons = (pokemons) => ({
    type: types.getPokemons,
    payload: pokemons,
});
