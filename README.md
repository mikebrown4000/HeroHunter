# HeroHunter
Investigate the Marvel API database to find out more about your favorite Marvel Heroes and Villains

Hero Hunter is a front-end, interactive React Application that uses the Marvel Comics API to explore the MCU at a glance.
In addition to browsing your favorite characters and comics from the Marvel Universe, You will be able to invent your own superhero using the Create-Your-Own-Hero function next to the glossary. Don't let your dreams be dreams, Be a Hero-Hunter!

//Link to deployed Project:

This is the wireframe for my homepage which routes to..
![Home Page](https://i.imgur.com/sUbdoQp.png)
The Glossary..
![The Glossary](https://i.imgur.com/MqQT3R3.png)
And The hero creation screen!
![The Hero Creation Screen](https://i.imgur.com/DJ0H9R2.png)
Here is a brief overview of my componeent heirarchy:
![Scrappy Planning](https://i.imgur.com/J2u6w8T.jpg)

//Code Snippet:

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

              <Route path="/create" render={()=>
              <>
              <NewHeroForm
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              />
              <RenderCustom
              name={this.state.heroName}
              description={this.state.description}
              image={this.state.image}
              />
              </>
              }/>

          </div>


      </div>
      <Footer />
      </>
    );
  }
}


//User Stories:
Don't be limited by your imagination. Don't just be a part of the marvel universe. Live it.
