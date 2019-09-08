import React from "react";
import { Card, Image } from "semantic-ui-react";

const UserDetails = ({ userDetails }) => {
  const ud = userDetails;
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
      <Card.Content className="mycontent user-content">
        <Card.Content className="img-detail">
          <a href={ud.html_url} rel="noopener noreferrer" target="_blank">
            {" "}
            <Image src={ud.avatar_url} alt={`${ud.name}'s Avatar`} />
            <div className="img-name">{ud.login}</div>{" "}
          </a>
        </Card.Content>
        <Card.Content className="user-detail">
          <h4>User Details</h4>
          <ul>
            <li>
              <strong>Bio:</strong> {ud.bio}
            </li>
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
            rel="noopener noreferrer"
            target="_blank"
          >
            <p className="follow-link">Follow</p>{" "}
          </a>
        </Card.Content>
      </Card.Content>
    )
  );
};

export default UserDetails;
