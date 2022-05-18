import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core';
import {Provider} from 'react-redux';
import pokemonReducer from './reducers/pokemonReducer';
import { logActions, reportError } from './components/middlewares';
import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import './index.css';
import pokemonSaga from './sagas';
import thunk from 'redux-thunk';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const composedEnhancers = composeEnhancers(
  applyMiddleware(sagaMiddleware, logActions, reportError)
);

const reducer = combineReducers({
  pokemonReducer
})

const store = createStore(pokemonReducer, composedEnhancers);

sagaMiddleware.run(pokemonSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>


, 
document.getElementById('root'));
