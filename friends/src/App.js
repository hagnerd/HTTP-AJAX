import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import FriendList from "./components/FriendList";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(({ data }) => {
      this.setState({ friends: data });
    });
  }

  render() {
    return (
      <div>

        <Route
          path="/"
          exact
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />

      </div>
    );
  }
}

export default App;
