import React from 'react';
import FetchHeroes from './FetchHeroes'


export default (props) => {
  return (
    <span>
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        id="heroName"
        name="heroName"
        placeholder="ENTER A HERO.."
        onChange={props.handleChange}
      />
      <button>Search..</button>
    </form>
      <br></br>
    </span>
  )
}
