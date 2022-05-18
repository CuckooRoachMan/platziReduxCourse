import React from 'react';
import PokemonCard from './PokemonCard'
import {Grid} from 'semantic-ui-react'

const PokemonList = ({pokemons}) => {
  
  return (
    <Grid className='PokemonList'>
      {pokemons.map((pokemon,index)   => (
        <PokemonCard pokemon={pokemon} key={`pokemon-${index}`}/>
      ))}
    </Grid>
  );
};

PokemonList.defaultProps={
  pokemons:[],
}

export default PokemonList; 

