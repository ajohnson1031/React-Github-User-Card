import React from "react";
import { Container, Card } from "semantic-ui-react";
import GitHubCalendar from "react-github-calendar";
import UserDetails from "./UserDetails";
import FollowCard from "./FollowCard";
import RepoList from "./RepoList";

class UserCard extends React.Component {
  constructor() {
    super();
    this.state = { userName: "ajohnson1031", userData: "", searchTerm: "" };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/ajohnson1031")
      .then(res => res.json())
      .then(res => {
        this.setState({
          userName: this.state.userName,
          userData: res,
          searchTerm: ""
        });
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.userName !== prevState.userName) {
      fetch(`https://api.github.com/users/${this.state.searchTerm}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            userName: this.state.searchTerm,
            userData: res,
            searchTerm: ""
          });
        });
    }
  }

  handleClick = e => {
    e.preventDefault();
    !this.state.searchTerm
      ? console.log("error")
      : this.setState({
          userName: this.state.searchTerm,
          userData: "",
          searchTerm: this.state.searchTerm
        });
  };

  handleChange = e => {
    this.setState({
      userName: this.state.userName,
      userData: this.state.userData,
      [e.target.name]: e.target.value
    });
  };

  render() {
    const orangeTheme = {
      background: "transparent",
      text: "#FFF",
      grade4: "#FF8F00",
      grade3: "#FFA724",
      grade2: "#FFC400",
      grade1: "#ffd195",
      grade0: "#FFF5E8"
    };
    return (
      this.state.userData && (
        <Container className="main-wrapper">
          <Card>
            <Card.Header>
              <form>
                {" "}
                <input
                  type="text"
                  name="searchTerm"
                  placeholder="Enter user GitHub handle to search..."
                  value={this.state.searchTerm}
                  onChange={this.handleChange}
                />
                <button type="submit" onClick={this.handleClick}>
                  SEARCH
                </button>
              </form>
              <h1>GitHub User Profile: {this.state.userName}</h1>
            </Card.Header>
            <Card.Content className="content user-calendar">
              <GitHubCalendar
                username={this.state.userData.login}
                theme={orangeTheme}
              />
            </Card.Content>
            <UserDetails userDetails={this.state.userData} />
            <FollowCard
              followers={this.state.userData.followers_url}
              followerCount={this.state.userData.followers}
              followName={this.state.userName}
            />
            <RepoList
              reposUrl={this.state.userData.repos_url}
              count={this.state.userData.public_repos}
            />
          </Card>
        </Container>
      )
    );
  }
}

export default UserCard;
