import React from "react";
import axios from "axios";
import { Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FriendList from "./components/FriendList";
import FriendPage from "./components/FriendPage";
import FriendForm from "./components/FriendForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/friends").then(({ data }) => {
      this.setState({ friends: data });
    });
  }

  handleDelete = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  addNewUser = payload => {
    axios.post("http://localhost:5000/friends", payload).then(response => {
      this.setState({
        friends: response.data
      });
    });
  };

  editUser = (payload, id) => {
    console.log(id, payload);
    axios
      .put(`http://localhost:5000/friends/${id}`, payload)
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div className="bg-gray-200 min-h-screen h-full pb-8">
        <Navigation />

        <Route
          path="/"
          exact
          render={props => (
            <FriendList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/new"
          render={props => (
            <FriendForm {...props} handleSubmit={this.addNewUser} />
          )}
        />

        <Route
          exact
          path="/friends/:id"
          render={props => (
            <FriendPage
              {...props}
              handleDelete={this.handleDelete}
              friend={this.state.friends.find(
                friend => friend.id === Number(props.match.params.id)
              )}
            />
          )}
        />
        <Route
          path="/friends/:id/edit"
          render={props => {
            const friend = this.state.friends.find(
              friend => friend.id === Number(props.match.params.id)
            );

            return (
              <FriendForm
                {...props}
                submitText="Save"
                handleSubmit={this.editUser}
                friend={friend}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
