import React from 'react';

export default (props) => {
  let heroImage = props.hero.thumbnail
  console.log(heroImage);

  // +'/portrait_fantastic.'+props.hero.thumbnail.extension;

  return(
    <div>
      <h1>{props.hero.name}</h1>
      <h4>{props.hero.description}</h4>
      <h4>{heroImage}</h4>
    </div>
  )
}
