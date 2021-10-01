import { types } from '../types/types';

const initialState = {
   loading: true,
   store: [],
   storeInfo: [],
};

export const pokemonReducer = (state = initialState, action) => {
   switch (action.type) {
      case types.getPokemons:
         return {
            ...state,
            store: action.payload,
            loading: false,
         };
      case types.getPokemonInfo:
         return {
            ...state,
            storeInfo: [...state.storeInfo, action.payload],
         };
      default:
         return state;
   }
};
