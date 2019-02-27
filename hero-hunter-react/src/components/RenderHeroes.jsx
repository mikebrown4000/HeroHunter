import React from 'react';

export default (props) => {

  return(
    <div>
      {props.hero &&
      <div className='heroCard'>
        <h1>{props.hero.name}</h1>
        <h4>{props.hero.description}</h4>
        <img src={props.hero.thumbnail.path+'/portrait_fantastic.jpg'} />
      </div>
      }
    </div>
  )
}
