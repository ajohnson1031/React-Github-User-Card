import React from "react";
import { Card } from "semantic-ui-react";
import RepoItem from "./RepoItem";

class RepoList extends React.Component {
  constructor({ reposUrl, count }) {
    super();
    this.state = {
      reposUrl: reposUrl,
      count: count,
      allRepos: ""
    };
  }

  componentDidMount() {
    fetch(`${this.state.reposUrl}?page=1&per_page=${this.state.count}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          reposUrl: this.state.reposUrl,
          count: this.state.count,
          allRepos: res
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      this.state.allRepos && (
        <Card.Content className="mycontent repo-list">
          <h4>Repos ({this.state.count}):</h4>
          {this.state.allRepos.map((repo, i) => {
            return (
              <RepoItem name={repo.name} url={repo.html_url} id={i} key={i} />
            );
          })}
        </Card.Content>
      )
    );
  }
}

export default RepoList;
