import React from "react";
import { Card } from "semantic-ui-react";
import RepoItem from "./RepoItem";

class RepoList extends React.Component {
  constructor({ reposUrl, count, repoName }) {
    super();

    this.state = {
      repoName: repoName,
      reposUrl: `${reposUrl}?page=1&per_page=15`,
      count: count,
      allRepos: "",
      page: 1
    };
  }

  componentDidMount() {
    fetch(this.state.reposUrl)
      .then(res => res.json())
      .then(res => {
        this.setState({
          repoName: this.state.repoName,
          reposUrl: this.state.reposUrl,
          count: this.state.count,
          allRepos: res,
          page: this.state.page
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      this.state.allRepos && (
        <Card.Content className="mycontent repo-list">
          <div className="h4-container">
            <h4>Repos ({this.state.count}):</h4>
          </div>
          <div className="list-container">
            <div className="repos-listed">
              {this.state.allRepos.map((repo, i) => {
                return (
                  <RepoItem
                    name={repo.name}
                    url={repo.html_url}
                    id={i}
                    key={i}
                  />
                );
              })}
            </div>
            {this.state.count >= 20 && (
              <a
                href={`https://github.com/${this.state.repoName}?tab=repositories`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="github-linkto">
                  <p>{`See All Repositories (${this.state.count -
                    20} more...)`}</p>
                </div>
              </a>
            )}
          </div>
        </Card.Content>
      )
    );
  }
}

export default RepoList;
