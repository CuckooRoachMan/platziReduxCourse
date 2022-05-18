import axiosInstance from "./config"
import axios from "axios";

export const getPokemons = (limit = 151) =>
  axiosInstance
    .get(`/pokemon?limit=${limit}`)
    .then((response) => response.data)
    .catch((error) => console.log(error));

export const getPokemonWithDetails = () => {
  return getPokemons()
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
    return pokemonsData;
  })    
}


    