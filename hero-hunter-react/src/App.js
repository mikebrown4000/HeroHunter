import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import HeroSearch from './components/HeroSearch';
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
  this.setState({
    heroName: this.state.heroName,

  })
}



  render() {
    return (
      <div className="App">
        <div>
        //Header Component
        <h1>  Hero Hunter </h1>


        <HeroSearch
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        heroName={this.state.heroName}
        />
        //[route to hero glossary]
        //[route to crerate a hero (new Hero form)]
        </div>

        //Footer Component
      </div>
    );
  }
}

export default App;
