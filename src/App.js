import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/Navbar';
import Auth from './auth/Auth';
import Home from './home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: '',
    }
    this.setSessionState = this.setSessionState.bind(this);
    this.logout = this.logout.bind(this)
    // bind things here
  }

  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token })
  }

  logout() {
    this.setState({
      sessionToken: '',
    })
    localStorage.clear();
    // window.location.reload();
  }



  protectedViews = () => {
    if( this.state.sessionToken === localStorage.getItem('token')) {
      return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home sessionToken={this.state.sessionToken} clickLogout={this.logout} />
          </Route>
        </Switch>
      </Router>
      )
    } else {
      return (
      <Router>
        <Route>
            <Auth setToken={this.setSessionState} />
        </Route>
      </Router>
      )
    }

  }



  render() {
    return (
      <div className="App">
       
       <NavBar />
       {this.protectedViews()}
        {/* <Auth setToken={this.setSessionState} /> */}
      </div>
    );
  }
}

export default App;
