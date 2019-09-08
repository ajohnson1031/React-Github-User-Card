import React from "react";
import { Container, Card } from "semantic-ui-react";
import GitHubCalendar from "react-github-calendar";
import UserDetails from "./UserDetails";
import FollowCard from "./FollowCard";
import RepoList from "./RepoList";

class UserCard extends React.Component {
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
              <h1>GitHub User Profile: {this.state.userName}</h1>
            </Card.Header>
            <Card.Content className="content user-calendar">
              <GitHubCalendar
                username={this.state.userData.login}
                theme={orangeTheme}
              />
            </Card.Content>
            <UserDetails userDetails={this.state.userData} />
            <FollowCard followers={this.state.userData.followers_url} />
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
