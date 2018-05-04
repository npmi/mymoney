import React, { Component } from 'react';
import FeedItem from './FeedItem';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    //const { getAccessToken } = this.props.auth;
    //const headers = { 'Authorization': `Bearer ${getAccessToken()}`}
    //const url = URL of api server
    //this.setState({ feeds: courses })
    //return axios.get(url, { headers})
    //  .then(response => mutateStateHere(with response.data));
  }

  login() {
    this.props.auth.login();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
      {
        !isAuthenticated() && (
          <h4>
            You are not logged in! Please {' '}
            <a
              style={{ cursor: 'pointer'}}
              onClick={this.login.bind(this)}
            >Log in</a>
            {' '}to continue.
          </h4>
        )
      }
      {
        isAuthenticated() && (
          this.state.feeds.map((item) => 
          <FeedItem key={item.id} feed={item} />
        )
        )
      }
    </div>
    )
  }
}

export default Feed; 
