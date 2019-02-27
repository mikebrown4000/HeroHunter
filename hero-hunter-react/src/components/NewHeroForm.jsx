import React from 'react';

const NewHeroForm = (props) => {
  return(
    <form>
      <label htmlFor="hero alias">Hero Alias:</label>
      <input
        type="text"
        name="hero_alias"
        id="hero_alias"
        value={props.name}
        onChange={props.handleChange} />
      <label htmlFor="real name">Real Name:</label>
      <input
        type="text"
        name="real_name"
        id="real_name"
        value={props.train_type}
        onChange={props.handleChange} />
      <label htmlFor="first appeared">First Appeared:</label>
      <input
        type="text"
        id="first_appeared"
        name="first_appeared"
        value={props.km_traveled}
        onChange={props.handleChange} />
      <label htmlFor="description">Desciption:</label>
      <input
        type="text"
        id="desciption"
        name="desciption"
        value={props.description}
        onChange={props.handleChange} />
      <input
      value="Submit"
      onClick={props.handleSubmit}
      />
    </form>
  )
}


export default NewHeroForm
