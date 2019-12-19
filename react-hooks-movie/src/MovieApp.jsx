import React, { Component, useState, useReducer } from 'react';
import './App.css';
import {defaultState, reducer} from './reducer';

function App() {
  let [searchValue, setSearchValue] = useState('');
  // reducer is a function
  let [store, dispatch] = useReducer(reducer, defaultState);
  function handleSearchInputChanges(e) {
    setSearchValue(e.target.value);
  }
  const callSearchFunction = (e) => {
    e.preventDefault();
    fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
    .then(res => res.json())
    .then(res => {
      // console.log('res   ',res);
      // action is a object
      
      // mapDispatchToProps = (dispatch) => {
       dispatch({
        type: 'SUCCESS',
        movies: res.Search
      })
      // }
    })
  }
  return (
    <div className="App">
      <div className="m-container">
        <form className="search">
          <input
            value={searchValue}
            onChange={handleSearchInputChanges}
            type="text"
          />
          <input onClick={callSearchFunction} type="submit" value="SEARCH" />
        </form>
        {
          store.movies.map((movie) => {
            return (
              <li>
                <h2>{movie.Title}</h2>
                <img src={movie.Poster} alt=""/>
                <p>{movie.Year}</p>
              </li>
            )
          })
        }
      </div>
    </div>
  )
}
export default App;