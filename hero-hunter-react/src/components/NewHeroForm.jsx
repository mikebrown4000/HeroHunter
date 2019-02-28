import React from 'react';

const NewHeroForm = (props) => {
  return(
    <form className="createForm">
      <input
        placeholder="name.."
        className="creator"
        type="text"
        name="hero_alias"
        id="hero_alias"
        value={props.name}
        onChange={props.handleChange} />
        <br></br>
      <input
        placeholder="super-powers.."
        className="creator"
        type="text"
        id="first_appeared"
        name="first_appeared"
        value={props.firstAppear}
        onChange={props.handleChange} />
        <br></br>
      <input
        placeholder="description.."
        className="creator"
        type="text"
        id="desciption"
        name="desciption"
        value={props.description}
        onChange={props.handleChange} />
        <br></br>
      <input
      type="submit"
      className="creator-submit"
      value="Submit.."
      onClick={props.handleSubmit}
      />
    </form>
  )
}


export default NewHeroForm
