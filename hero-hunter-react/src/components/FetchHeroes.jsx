import React from 'react';
import RenderHeroes from './RenderHeroes';
import getHeroes from '../services/getHeroes';

export default (props) => {

  const heroData = getHeroes(props.heroName);
  const name = heroData.name;
  console.log(heroData);

  return(
    //getHeroes
    //if data is full, calls render heroes (conditional render)
    <div>
      <RenderHeroes
      />
    </div>
  )
}
