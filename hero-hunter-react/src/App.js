import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import HeroSearch from './components/HeroSearch';
import getHeroes from './services/getHeroes.js';
import NewHeroForm from './components/NewHeroForm';
import Header from './components/Header'
import Footer from './components/Footer'
import RenderHeroes from './components/RenderHeroes'
import Homepage from './components/Homepage'

import axios from 'axios';


class App extends Component {
  constructor(){
    super();

    this.state = {
      hero: null,
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
      <>
      <div className="App">
        <Header />
          <div>
          <nav>
            <Link to="/glossary">Hero Hunt</Link>
            <Link to="/">Home</Link>
            <Link to="/create">Create A Hero</Link>
          </nav>

              <Route exact path="/" render={Homepage}/>
              <Route path="/glossary" render={()=>
              <>
              <HeroSearch
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              />
              <RenderHeroes
              hero={this.state.hero}
              />
              </>
              }/>
              <Route exact path="/create" render={NewHeroForm}/>
          </div>


      </div>
      <Footer />
      </>
    );
  }
}

export default App;
