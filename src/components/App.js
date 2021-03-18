import React, { Component } from "react";
import CharacterList from "./CharacterList";
import HeroList from "./HeroList";
import SquadStats from "./SquadStats";
import "../styles/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Super Squad</h2>
        <div className="col-md-5">
          <CharacterList />
        </div>
        <div className="col-md-5">
          <HeroList />
        </div>
        <div className="col-md-2">
          <SquadStats />
        </div>
      </div>
    );
  }
}

export default App;
