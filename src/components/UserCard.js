import React from "react";
import { Container, Card, Image, Icon } from "semantic-ui-react";
import GitHubCalendar from "react-github-calendar";

const UserCard = ({ props }) => {
  const ud = props.userData;
  console.log("UD LOGIN: " + ud.login);
  const date = new Date(ud.created_at);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const outputDate = `${
    monthNames[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;

  return (
    ud && (
      <Container className="main-wrapper">
        <Card>
          <Card.Header>
            <h1>GitHub User Profile: {ud.name}</h1>
          </Card.Header>
          <Card.Content className="content user-calendar">
            <GitHubCalendar username={ud.login} color="lightorange" />
          </Card.Content>

          <Card.Content className="content user-content">
            <Card.Content className="img-detail">
              <Image src={ud.avatar_url} alt={`${ud.name}'s Avatar`} />
              <div className="img-name">
                <a href={ud.html_url} target="_blank">
                  {ud.login}
                </a>
              </div>
            </Card.Content>
            <Card.Content className="user-detail">
              <h4>User Details</h4>
              <ul>
                <li>
                  <strong>Date Joined:</strong> {outputDate}
                </li>
                <li>
                  <strong>Repos:</strong> {ud.public_repos}
                </li>
                <li>
                  <strong>Followers:</strong> {ud.followers}
                </li>
                <li>
                  <strong>Following:</strong> {ud.following}
                </li>
              </ul>

              <a
                href="https://github.com/search?q=ajohnson1031&type=Users"
                target="_blank"
              >
                <p className="follow-link">Follow</p>{" "}
              </a>
            </Card.Content>
          </Card.Content>
        </Card>
      </Container>
    )
  );
};

export default UserCard;
