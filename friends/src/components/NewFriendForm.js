import React from "react";
import PropTypes from "prop-types";

const initialState = {
  name: "",
  age: 18,
  email: ""
};

const styles = {
  label: "text-sm text-gray-800 mb-2",
  input:
    "p-2 rounded-sm mb-3 border-2 border-white focus:border-gray-500 w-full"
};

export default class NewFriendForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  static propTypes = {
    handleSubmit: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, age, email } = this.state;

    this.props.handleSubmit({
      name,
      age,
      email
    });

    this.setState(initialState);
  };

  render() {
    const { name, age, email } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form
        className="flex flex-col w-1/4 mx-auto pt-6"
        onSubmit={handleSubmit}
      >
        <label className={styles.label} htmlFor="name-input">
          Name:
        </label>
        <input
          className={styles.input}
          type="text"
          id="name-input"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <label className={styles.label} htmlFor="age-input">
          Age:
        </label>
        <input
          className={styles.input}
          id="age-input"
          type="number"
          name="age"
          value={age}
          onChange={handleChange}
        />

        <label className={styles.label} htmlFor="email-input">
          Email:
        </label>
        <input
          className={styles.input}
          id="email-input"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <button className="bg-blue-500 hover:bg-blue-400 text-white rounded-sm font-bold px-3 py-2">
          Submit
        </button>
      </form>
    );
  }
}
