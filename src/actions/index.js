import { SET_POKEMON, CLEAR_ERROR, SET_ERROR, FETCH_POKEMONS } from "./type"
import { getPokemons } from "../api/getPokemons";
import axios from "axios";
export const setPokemons = (payload) => ({
  type: SET_POKEMON,
  payload,

});

export const setError = (payload) => ({
  type: SET_ERROR,
  payload,
});

export const clearError = (payload) => ({
  type: CLEAR_ERROR,
  payload,
});

export const getPokemonWithDetails = () => (dispatch) =>  {
  getPokemons()
  .then( (res) => {
    const PokemonList=res.results;
    return Promise.all(
      PokemonList.map( (pokemon) => axios.get(pokemon.url))
    ); 
  })
  .then(  (pokemonsResponse) => {
    const pokemonsData= pokemonsResponse.map(
      (response) => response.data
      );
      dispatch(setPokemons(pokemonsData));
    })
    .catch((error) => {
      dispatch(setError({ message: 'Ocurrió un error', error }));
    }); 

}

export const fetchPokemons = () => ({
  type: FETCH_POKEMONS,
})
