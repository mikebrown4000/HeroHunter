import React from 'react';

export default (props) => {

  return(
    <div>
      {props.hero &&
      <div className="heroContainer">
        <div className='heroCard'>
          <h2>{props.hero.name}</h2>
          <p id="heroText">{props.hero.description}</p>
          <img src={props.hero.thumbnail.path+'/portrait_fantastic.jpg'} />
        </div>
      </div>
      }
    </div>
  )
}
