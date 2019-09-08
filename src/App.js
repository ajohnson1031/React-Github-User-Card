import React from "react";
import UserCard from "./components/UserCard";

class App extends React.Component {
  state = { userName: "ajohnson1031", userData: "" };

  componentDidMount() {
    fetch("https://api.github.com/users/ajohnson1031")
      .then(res => res.json())
      .then(res => {
        this.setState({ userName: this.state.userName, userData: res });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <UserCard props={this.state} />
      </div>
    );
  }
}

export default App;
