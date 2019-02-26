import React, { Component } from 'react';
import './App.css';

import getHeroes from './services/getHeroes.js';

import axios from 'axios';


class App extends Component {
  constructor(){
    super();

    this.state = {
      hero: [],
      heroName: '',
      realName: '',
      firstAppear:'',
      description:'',
      image:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

async componentDidMount(){
  const heroData = await getHeroes();
  this.setState({
    hero: heroData
  })
}

handleChange(e){
  const {name, value} = e.target;
  this.setState({
    [name]:value
  })
}

handleSubmit(ev){
  ev.preventDefault();
  const nameNameName = 'I want to get hit by a car';
}



  render() {
    return (
      <div className="App">
        <h1>  Hero Hunter </h1>
        <input
          type="text"
          id="heroName"
          name="heroName"
          onChange={this.handleChange}
        />
        <button
          onSubmit={this.handleSubmit}
        >Submit- I guess? WGAF</button>
        <br></br>
        //[route to hero glossary]
        //[route to crerate a hero (new Hero form)]
      </div>
    );
  }
}

export default App;
