import React from 'react';
import Searcher from '../../components/Searcher';
import PokemonList from '../../components/PokemonList';
import { useDispatch,useSelector } from 'react-redux';
import {useEffect} from 'react';
import { getPokemons } from '../../api/getPokemons';
import {fetchPokemons, getPokemonWithDetails} from '../../actions';
import './styles.css';
import axios from 'axios';



function Home() {

  const dispatch=useDispatch();
  const list = useSelector(state => state.list)


  useEffect(()=>{
    dispatch(fetchPokemons())
  },[]);

  return (
    <div className='Home'>
      <Searcher />
      <p>Lista de Pokemon</p>
      <PokemonList pokemons={list}/>
    </div>
  );
}

export default Home;
