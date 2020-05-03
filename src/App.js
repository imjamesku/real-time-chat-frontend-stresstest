import React, { Component } from 'react';
import './App.css';
import InitChat from './components/InitChat'
import Chat from './components/Chat'
import WebSocketInstance from './services/WebSocket'
import StressTest from './components/StressTest/StressTest'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      loggedIn: false
    };
  }

  handleLoginSubmit = (username) => {
    this.setState({ loggedIn: true, username: username });
    WebSocketInstance.connect();
  }

  render() {
    const {
      loggedIn,
      username
    } = this.state;

    return (
      <Router>

        <div className="App">
          <Switch>
            <Route path="/test" exact>
              <StressTest />
            </Route>
            <Route path="/" exact>

              {
                loggedIn ?
                  <Chat
                    currentUser={username}
                  />
                  :
                  <InitChat
                    onSubmit={this.handleLoginSubmit}
                    usernameChangeHandler={this.usernameChangeHandler}
                  />
              }
            </Route>

          </Switch>

        </div>
      </Router>
    );
  }
}
