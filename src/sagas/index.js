import {call, put, takeEvery} from 'redux-saga/effects'
import { setPokemons, setError } from '../actions';
import { getPokemonWithDetails } from '../api/getPokemons'
import {FETCH_POKEMONS} from '../actions/type'


function* fetchPokemonWithDetails(action){
  try {
    const pokemonsWithDetails = yield call(getPokemonWithDetails,action.payload);
    yield put(setPokemons(pokemonsWithDetails));
  } catch (e) {
    yield put(setError({ message: 'Error al obtener detalles', error: e }));
  }
}

function* pokemonSaga(){
  yield takeEvery(FETCH_POKEMONS, fetchPokemonWithDetails)
}

export default pokemonSaga;