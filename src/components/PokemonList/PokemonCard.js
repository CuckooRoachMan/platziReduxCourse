import React from 'react';
import {GridColumn, Icon, Image,Label, Grid, Divider} from 'semantic-ui-react';
import {MAIN_COLOR, FAV_COLOR} from '../../utils/constants';
import './styles.css'


const PokemonCard = ({pokemon}) => {

  return (
    <GridColumn mobile={16} tablet={8} computer={4} >
      <div className='PokemonCard'>
        <Icon name ='favorite' color={FAV_COLOR}/>
        <p className="pokemonCard-imageComparisons">
          <div>
            <label className='PokemonCard-imgeLabel'>  Normal</label>
            <Image centered src = {pokemon.sprites.front_default} alt='Pokemon Front'/>
          </div>
          <div>
            <label className='PokemonCard-imgeLabel'>  Shiny</label>
            <Image centered src = {pokemon.sprites.front_shiny} alt='Pokemon Front'/>
          </div>
            
        </p>
        <h2>{pokemon.name}</h2>
        <p className='PokemonCard-tittle'>Ditto</p>
        <Divider/>
        
        {pokemon.types.map( (type)=> (
          <Label key={`${pokemon.id}-${type.type.name}`} color={MAIN_COLOR}>{type.type.name}</Label>  
        )  )}
      </div>
    </GridColumn>
    
  )
}

export default PokemonCard;