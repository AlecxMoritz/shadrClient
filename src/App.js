import React, { Component } from 'react';
import './App.css';
import NavBar from './navbar/Navbar';
import Auth from './auth/Auth';
import Home from './home/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionToken: '',
      screenname: ''
    }
    this.setSessionState = this.setSessionState.bind(this);
    this.logout = this.logout.bind(this)
    this.setScreenname = this.setScreenname.bind(this)
    // bind things here
  }

  setSessionState(token) {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token })
  }

  setScreenname(user) {
    let screenName = user.usersymbol + user.screenname
      localStorage.setItem('screenname', user.usersybmol + user.screenname)
      this.setState({ screenname: screenName})
  }

  logout() {
    this.setState({
      sessionToken: '',
      screenname: '',
    })
    localStorage.clear();
    // window.location.reload();
  }

  // add special buttons to protected routes

  protectedViews = () => {
    if( this.state.sessionToken === localStorage.getItem('token')) {
      return (
      <Router>
        <Switch>
          <Route path='/' exact>
          
            <Home screenname={this.state.screenname} sessionToken={this.state.sessionToken} clickLogout={this.logout} />
          </Route>
        </Switch>
      </Router>
      )
    } else {
      return (
      <Router>
        <Route>
            <Auth setToken={this.setSessionState} setScreenname={this.setScreenname}/>
        </Route>
      </Router>
      )
    }

  }



  render() {
    return (
      <div className="App">
        <Helmet>
          <style>{'body { background-color: #2a2a2a; }'}</style>
        </Helmet>
       
       <NavBar />
       {this.protectedViews()}
        {/* <Auth setToken={this.setSessionState} /> */}
      </div>
    );
  }
}

export default App;
