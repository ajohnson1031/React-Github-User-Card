import React from "react";
import { Container, Card } from "semantic-ui-react";
import GitHubCalendar from "react-github-calendar";
import UserDetails from "./UserDetails";
import FollowCard from "./FollowCard";
import RepoList from "./RepoList";

const UserCard = ({ props }) => {
  const ud = props.userData;

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
    ud && (
      <Container className="main-wrapper">
        <Card>
          <Card.Header>
            <h1>GitHub User Profile: {ud.name}</h1>
          </Card.Header>
          <Card.Content className="content user-calendar">
            <GitHubCalendar username={ud.login} theme={orangeTheme} />
          </Card.Content>
          <UserDetails userDetails={ud} />
          <FollowCard followers={ud.followers_url} />
          <RepoList reposUrl={ud.repos_url} count={ud.public_repos} />
        </Card>
      </Container>
    )
  );
};

export default UserCard;
