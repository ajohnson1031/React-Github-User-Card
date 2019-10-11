import React from "react";
import { Image } from "semantic-ui-react";
import Icon from "../imgs/repo.svg";

const RepoItem = ({ name, url }) => {
  return (
    <div className="repo-item">
      <Image src={Icon} alt="GitHub Repo Icon" />
      <a href={url} rel="noopener noreferrer" target="_blank">
        <p>{name}</p>
      </a>
    </div>
  );
};

export default RepoItem;
