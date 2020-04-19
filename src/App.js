import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {SERVER_URL} from './URL/Constants';
import Snackbar from '@material-ui/core/Snackbar';

class App extends Component  {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', isAthuenticated: false, open: false};
  }
  handleChange = (event) => {
    this.setState({[event.target.name] : event.target.value});
    }
  handleClose = (event) => {
    this.setState({ open: false });
    }

  login = () => {
    let currentComponent = this;
    const user = {email: this.state.email, password:
    this.state.password};
    fetch(SERVER_URL + `api/account/login`, {
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(user)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data.token);
      const jwtToken = data.token;
      if (jwtToken !== null) {
        sessionStorage.setItem("jwt", jwtToken);
        currentComponent.setState({isAthuenticated: true});
        }
      else {
        this.setState({open: true});
      }
    })
    .catch(err => console.error(err))
    console.log(user);
    }
  render() {
    if(this.state.isAthuenticated === true) {
      return(<Home />);
    }
    else {
    return (
      <div className="App">
        <Snackbar
          open={this.state.open} onClose={this.handleClose}
          autoHideDuration={1500}
          message='Check your username and password' />
        <TextField name="email" placeholder="Username"
        onChange={this.handleChange} /><br/>
        <TextField type="password" name="password"
        placeholder="Password"
        onChange={this.handleChange} /><br/><br/>
        <Button variant="contained" color="primary"
        onClick={this.login}>
        Login
        </Button>
      </div>
    );
    }
  }
  
}

export default App;
