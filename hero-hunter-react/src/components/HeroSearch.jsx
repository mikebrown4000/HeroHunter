import React from 'react';
import FetchHeroes from './FetchHeroes'



export default (props) => {
  return (
    <div>
      <input
        type="text"
        id="heroName"
        name="heroName"
        onChange={props.handleChange}
        onSubmit={props.handleSubmit}
      />
      <button
        onClick={FetchHeroes}
      >Search..</button>
      <br></br>
    </div>
  )
}
