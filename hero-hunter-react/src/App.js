import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import HeroSearch from './components/HeroSearch';
import getHeroes from './services/getHeroes.js';
import Header from './components/Header'
import Footer from './components/Footer'
import RenderHeroes from './components/RenderHeroes'

import axios from 'axios';


class App extends Component {
  constructor(){
    super();

    this.state = {
      hero: [],
      heroName: '',
      firstAppear:'',
      description:'',
      image:''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

handleChange(e){
  const {name, value} = e.target;
  this.setState({
    [name]:value
  })
}

async handleSubmit(ev){
  ev.preventDefault();
  const heroData = await getHeroes()
  console.log(heroData);
  this.setState({
    hero: heroData
  })
  console.log(this.state);
}



  render() {
    return (
      <div className="App">
        <Header />

          <div>
          //Header Component
          <h1>  Hero Hunter </h1>


          <HeroSearch
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          />
          <RenderHeroes
          hero={this.state.hero}
          />
          //[route to hero glossary]
          //[route to crerate a hero (new Hero form)]
          </div>

        <Footer />
      </div>
    );
  }
}

export default App;
