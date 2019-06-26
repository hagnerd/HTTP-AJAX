import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";
import NewFriendForm from "./components/NewFriendForm";

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

  addNewUser = ({ name, age, email }) => {
    axios
      .post("https://localhost:5000/friends", {
        name,
        age,
        email
      })
      .then(response => console.log(response));
  };

  render() {
    return (
      <div className="bg-gray-200 min-h-screen h-full">
        <Navigation />

        <Route
          path="/"
          exact
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
        <Route path="/new" render={props => <NewFriendForm {...props} />} />
        <Route
          path="/friends/:id"
          render={props => (
            <Friend
              {...props}
              friend={this.state.friends.find(
                friend => friend.id === props.match.params.id
              )}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
