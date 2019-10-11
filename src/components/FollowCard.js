import React from "react";
import { Card, Image } from "semantic-ui-react";

class FollowCard extends React.Component {
  constructor({ followers, followerCount, followName }) {
    super();

    this.state = {
      followName: followName,
      followers_url: `${followers}?page=1&per_page=20`,
      followers: "",
      followerCount: followerCount,
      follower_imgs: "",
      page: 1
    };
  }

  componentDidMount() {
    // console.log(this.state);

    fetch(this.state.followers_url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          followName: this.state.followName,
          followers_url: this.state.followers_url,
          followers: res,
          followerCount: this.state.followerCount,
          follower_imgs: res.map(r => r.avatar_url),
          page: this.state.page
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      this.state.followers && (
        <Card.Content className="mycontent following-content">
          <div className="h4-container">
            <h4>Followers ({this.state.followerCount}):</h4>
          </div>
          <div className="list-container">
            <div className="follower-list">
              {this.state.followers.map((follower, i) => {
                return (
                  <a
                    href={follower.html_url}
                    rel="noopener noreferrer"
                    target="_blank"
                    key={follower.id}
                  >
                    <div className="follower-tab">
                      <Image src={this.state.follower_imgs[i]} />
                      <p>{follower.login}</p>
                    </div>
                  </a>
                );
              })}
            </div>
            {this.state.followerCount >= 20 && (
              <a
                href={`https://github.com/${this.state.followName}?tab=followers`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="github-linkto">
                  <p>{`See All Followers (${this.state.followerCount -
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
export default FollowCard;
