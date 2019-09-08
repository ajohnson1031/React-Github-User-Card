import React from "react";
import { Card, Image } from "semantic-ui-react";

class FollowCard extends React.Component {
  constructor({ followers }) {
    super();
    this.followers = followers;

    this.state = {
      followers_url: `${this.followers}?page=1&per_page=20`,
      followers: "",
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
          followers_url: this.state.followers_url,
          followers: res,
          follower_imgs: res.map(r => r.avatar_url)
        });
        console.log(this.state.followers_url);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      this.state.followers && (
        <Card.Content className="mycontent following-content">
          <div>
            <h4>Followers ({this.state.followers.length}):</h4>
          </div>
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
        </Card.Content>
      )
    );
  }
}
export default FollowCard;
