import React from 'react';

const NewHeroForm = (props) => {
  return(
    <form className="createForm">
      <label htmlFor="hero alias">Hero Alias:</label>
      <input
        type="text"
        name="hero_alias"
        id="hero_alias"
        value={props.name}
        onChange={props.handleChange} />
        <br></br>
      <label htmlFor="first appeared">First Appeared:</label>
      <input
        type="text"
        id="first_appeared"
        name="first_appeared"
        value={props.firstAppear}
        onChange={props.handleChange} />
        <br></br>
      <label htmlFor="description">Desciption:</label>
      <input
        type="text"
        id="desciption"
        name="desciption"
        value={props.description}
        onChange={props.handleChange} />
        <br></br>
      <input
      value="Submit"
      onClick={props.handleSubmit}
      />
    </form>
  )
}


export default NewHeroForm
