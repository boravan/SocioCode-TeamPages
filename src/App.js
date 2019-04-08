import React from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import DataService from "./services/DataService";
import Home from "./pages/Home";
import Team1 from "./pages/Team1";
import Team2 from "./pages/Team2";
import TeamList from "./pages/TeamList";

class App extends React.Component {
  state = { teams: [] };

  componentDidMount() {
    this.setState({ teams: DataService.getTeams() });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team_1">Team 1</Link>
          </li>
          <li>
            <Link to="/team_2">Team 2</Link>
          </li>
        </ul>

        <TeamList teams={this.state.teams} />

        <Route path="/" exact component={Home} />
        <Route path="/team_1" component={Team1} />
        <Route path="/team_2" component={Team2} />
      </div>
    );
  }
}

export default App;
