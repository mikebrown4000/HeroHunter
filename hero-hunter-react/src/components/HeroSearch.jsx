import React from 'react';
import FetchHeroes from './FetchHeroes'


export default (props) => {
  return (
    <div>
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        id="heroName"
        name="heroName"
        onChange={props.handleChange}
      />
      <button>Search..</button>
    </form>
      <br></br>
    </div>
  )
}
